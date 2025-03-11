pipeline{
    agent {
        docker {
           image 'mcr.microsoft.com/playwright:v1.51.0-noble'
        }
    }

        stages {

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        stage('execute junit') {
            steps {
                script {
                    sh 'npx playwright test '
                }
            }
        }

       

    }
     post {
                always {
                    allure includeProperties:
                     false,
                     jdk: '',
                     results: [[path: 'allure-results']]
                }
            }
       
}