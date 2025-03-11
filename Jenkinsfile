pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.51.0-noble'
        }
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
                sh 'npm install -g allure-commandline --save-dev'
            }
        }

        stage('Execute Playwright Tests') {
            steps {
                script {
                    sh 'npx playwright test'
                }
            }
        }
    }

    post {
        always {
            script {
                sh 'allure generate allure-results --clean -o allure-report'
            }
            archiveArtifacts artifacts: 'allure-report/**', allowEmptyArchive: true
        }
    }
}
