def app

pipeline {
    agent any
    environment {
        ENV_TYPE = "PRODUCTION"
        PORT = 9678
        NAMESPACE = "npm"
        REGISTRY_HOSTNAME = "874733548478.dkr.ecr.eu-central-1.amazonaws.com"
        PROJECT = "storybook-ui-kit"
        DEPLOYMENT_NAME = "storybook-ui-kit-deployment"
        IMAGE_NAME = "${env.BUILD_ID}_${env.ENV_TYPE}_${env.GIT_COMMIT}"
        DOCKER_BUILD_NAME = "${env.PROJECT}:${env.IMAGE_NAME}"
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
        stage('Storybook docker build') {
            steps {
                echo "Build image started..."
                    script {
                        app = docker.build("${env.DOCKER_BUILD_NAME}")
                    }
                echo "Build image finished..."
            }
        }
        stage('Push docker image') {
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
       stage('Delete image local') {
             steps {
                 script {
                    sh "docker rmi ${env.DOCKER_BUILD_NAME}"
                    sh "docker rmi ${env.REGISTRY_HOSTNAME}/${env.DOCKER_BUILD_NAME}"
                 }
             }
        }
        stage('Preparing deployment') {
             steps {
                 echo "Preparing started..."
                     sh 'ls -ltr'
                     sh 'pwd'
                     sh "chmod +x preparing-deploy.sh"
                     sh "./preparing-deploy.sh ${env.REGISTRY_HOSTNAME} ${env.PROJECT} ${env.IMAGE_NAME} ${env.DEPLOYMENT_NAME} ${env.PORT} ${env.NAMESPACE}"
                     sh "cat deployment.yaml"
             }
        }
        stage('Deploy to Kubernetes') {
             steps {
                 withKubeConfig([credentialsId: 'prod-kubernetes']) {
                    sh 'kubectl apply -f deployment.yaml'
                    sh "kubectl rollout status deployment/${env.DEPLOYMENT_NAME} --namespace=${env.NAMESPACE}"
                    sh "kubectl get services -o wide"
                 }
             }
        }
    }
}
