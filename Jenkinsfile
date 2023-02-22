def app

pipeline {
    agent any
    environment {
    }
    stages {
        stage('Clone repository') {
            steps {
                checkout scm
            }
        }
        stage('Install') {
            steps {
               withNPM(npmrcConfig: npm-it-incubator') {
                  sh 'ls -ltr'
               }
            }
        }
    }
}
