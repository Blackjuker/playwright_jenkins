pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.51.0-noble'
            args '-v /var/run/docker.sock:/var/run/docker.sock'  // Mount Docker socket for DinD
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
            apt-get update && apt-get install -y wget unzip
            wget https://github.com/allure-framework/allure2/releases/download/2.33.0/allure-2.33.0.tgz
            tar -zxvf allure-2.33.0.tgz -C /tmp/
            ln -s /tmp/allure-2.33.0/bin/allure /usr/bin/allure
        '''
            }
        }

        stage('Execute Tests') {
            steps {
                script {
                    sh 'npx playwright test'
                }
            }
        }
    }

    post {
        always {
            allure includeProperties: false, jdk: '', results: [[path: 'allure-results']],
             archiveArtifacts artifacts: 'allure-results/*.*'
        }
    }
}