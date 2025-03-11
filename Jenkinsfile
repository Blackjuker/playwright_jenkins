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
         stage('Install Allure') {
            steps {
                sh '''
                    wget https://github.com/allure-framework/allure2/releases/download/2.33.0/allure-2.33.0.tgz
                    tar -zxvf allure-2.33.0.tgz -C /opt/
                    ln -s /opt/allure-2.33.0/bin/allure /usr/bin/allure
                '''
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
                     results: [[path: 'allure-results/**']]
                }
            }

}