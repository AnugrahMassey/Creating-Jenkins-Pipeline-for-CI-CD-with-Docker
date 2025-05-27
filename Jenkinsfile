pipeline {
    agent any
    environment {
        DOCKER_IMAGE = "anugrah28/nodejs-jenkins-demo"
    }
    stages {
        stage('Build') {
            steps {
                script {
                    docker.build("${env.DOCKER_IMAGE}:${env.BUILD_ID}")
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    // Run tests *inside* the container where devDependencies are available
                    docker.image("${env.DOCKER_IMAGE}:${env.BUILD_ID}").inside {
                        sh 'npm install'
                        sh 'npm test'
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub-creds') {
                        docker.image("${env.DOCKER_IMAGE}:${env.BUILD_ID}").push()
                        docker.image("${env.DOCKER_IMAGE}:${env.BUILD_ID}").push('latest')
                    }
                }
            }
        }
    }
    post {
        always {
            sh "docker rmi ${env.DOCKER_IMAGE}:${env.BUILD_ID} || true"
        }
    }
}
