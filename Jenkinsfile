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

        // stage('Install Allure') {
        //     steps {
        //         sh '''
        //             apt-get update && apt-get install -y wget unzip
        //             wget https://github.com/allure-framework/allure2/releases/download/2.33.0/allure-2.33.0.tgz
        //             tar -zxvf allure-2.33.0.tgz -C /opt/
        //             ln -s /opt/allure-2.33.0/bin/allure /usr/bin/allure
        //         '''
        //     }
        // }

        // stage('Execute Tests') {
        //     steps {
        //         script {
        //             sh 'npx playwright test'
        //         }
        //     }
        // }
    }

    // post {
    //     always {
    //         allure includeProperties: false, jdk: '', results: [[path: 'allure-results/*.*']]
    //         //archiveArtifacts artifacts:'allure-results/*.*'
    //     }
    // }
     post {                
                // If Maven was able to run the tests, even if some of the test
                // failed, record the test results and archive the jar file.
                // success { allure([
                //     includeProperties: false,
                //     jdk: '',
                //     properties: [],
                //     reportBuildPolicy: 'ALWAYS',
                //     results: [[path: 'target/allure-results']]
                    
                // ])
                allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
            }
         
}