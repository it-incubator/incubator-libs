def app

pipeline {
    agent any
    environment {
        ENV_TYPE = "PRODUCTION"
        PORT = 9678
        PORT_MDX = 9679
        NAMESPACE = "npm"
        REGISTRY_HOSTNAME = "874733548478.dkr.ecr.eu-central-1.amazonaws.com"
        PROJECT = "storybook-ui-kit"
        PROJECT_MDX = "storybook-mdx-components"
        DEPLOYMENT_NAME = "storybook-ui-kit-deployment"
        DEPLOYMENT_NAME_MDX = "storybook-mdx-components-deployment"
        IMAGE_NAME = "${env.BUILD_ID}_${env.ENV_TYPE}_${env.GIT_COMMIT}"
        IMAGE_NAME_MDX = "${env.BUILD_ID}_${env.ENV_TYPE}_${env.GIT_COMMIT}_mdx"
        DOCKER_BUILD_NAME = "${env.PROJECT}:${env.IMAGE_NAME}"
        DOCKER_BUILD_NAME_MDX = "${env.PROJECT_MDX}:${env.IMAGE_NAME_MDX}"
    }
    stages {
        stage('Clone repository') {
            steps {
                checkout scm
            }
        }
        stage('Install dependencies') {
            steps {
                script {
                  sh 'pnpm install'
               }
            }
        }
        stage('Build') {
            steps {
                script {
                  sh 'pnpm build'
               }
            }
        }
        stage('Preparing') {
             steps {
              withCredentials([string(credentialsId: 'NPM_ACCESS_TOKEN', variable: 'NPM_ACCESS_TOKEN')]) {
                 echo "Preparing started..."
                     sh 'ls -ltr'
                     sh 'pwd'
                     sh "chmod +x preparing.sh"
                     sh "./preparing.sh $NPM_ACCESS_TOKEN"
               }
             }
        }
        stage('Npm publish') {
            steps {
                script {
                  sh 'pnpm release'
               }
            }
        }
        stage('Storybook UI-KIT docker build') {
            steps {
                echo "Build image started..."
                    script {
                        app = docker.build("${env.DOCKER_BUILD_NAME}")
                    }
                echo "Build image finished..."
            }
        }
        stage('Push UI-KIT docker image') {
             steps {
                 echo "Push image started..."
                     script {
                        docker.withRegistry("https://${env.REGISTRY_HOSTNAME}", 'ecr:eu-central-1:ecr') {
                            app.push("${env.IMAGE_NAME}")
                        }
                     }
                 echo "Push image finished..."
             }
       }
       stage('Delete UI-KIT image local') {
             steps {
                 script {
                    sh "docker rmi ${env.DOCKER_BUILD_NAME}"
                    sh "docker rmi ${env.REGISTRY_HOSTNAME}/${env.DOCKER_BUILD_NAME}"
                 }
             }
        }
        stage('Storybook MDX-COMPONENTS docker build') {
            steps {
                echo "Build image started..."
                    script {
                        app = docker.build("${env.DOCKER_BUILD_NAME_MDX}", "-f ./Dockerfile.mdx-components ./")
                    }
                echo "Build image finished..."
            }
        }
        stage('Push MDX-COMPONENTS docker image') {
             steps {
                 echo "Push image started..."
                     script {
                        docker.withRegistry("https://${env.REGISTRY_HOSTNAME}", 'ecr:eu-central-1:ecr') {
                            app.push("${env.IMAGE_NAME_MDX}")
                        }
                     }
                 echo "Push image finished..."
             }
       }
       stage('Delete image local') {
             steps {
                 script {
                    sh "docker rmi ${env.DOCKER_BUILD_NAME_MDX}"
                    sh "docker rmi ${env.REGISTRY_HOSTNAME}/${env.DOCKER_BUILD_NAME_MDX}"
                 }
             }
        }
        stage('Preparing UI-KIT deployment') {
             steps {
                 echo "Preparing started..."
                     sh 'ls -ltr'
                     sh 'pwd'
                     sh "chmod +x preparing-deploy.sh"
                     sh "./preparing-deploy.sh ${env.REGISTRY_HOSTNAME} ${env.PROJECT} ${env.IMAGE_NAME} ${env.DEPLOYMENT_NAME} ${env.PORT} ${env.NAMESPACE}"
                     sh "cat deployment.yaml"
             }
        }
        stage('Preparing MDX-COMPONENTS deployment') {
             steps {
                 echo "Preparing started..."
                     sh 'ls -ltr'
                     sh 'pwd'
                     sh "chmod +x preparing-deploy-mdx.sh"
                     sh "./preparing-deploy-mdx.sh ${env.REGISTRY_HOSTNAME} ${env.PROJECT_MDX} ${env.IMAGE_NAME_MDX} ${env.DEPLOYMENT_NAME_MDX} ${env.PORT_MDX} ${env.NAMESPACE}"
                     sh "cat deployment-mdx.yaml"
             }
        }
        stage('Deploy UI-KIT') {
             steps {
                 withKubeConfig([credentialsId: 'prod-kubernetes']) {
                    sh 'kubectl apply -f deployment.yaml'
                    sh "kubectl rollout status deployment/${env.DEPLOYMENT_NAME} --namespace=${env.NAMESPACE}"
                    sh "kubectl get services -o wide"
                 }
             }
        }
        stage('Deploy MDX-COMPONENTS') {
             steps {
                 withKubeConfig([credentialsId: 'prod-kubernetes']) {
                    sh 'kubectl apply -f deployment-mdx.yaml'
                    sh "kubectl rollout status deployment/${env.DEPLOYMENT_NAME_MDX} --namespace=${env.NAMESPACE}"
                    sh "kubectl get services -o wide"
                 }
             }
        }
    }
}
