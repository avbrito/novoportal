pipeline {

    agent any
    environment {
        SSH_USER = 'USERNAME'
        SERVER_IP = '10.14.0.104'
        PROJECT_DIR = '/var/www/html/portalnew/testemp'
    }

    stages {
        stage('Checkout do Codigo') {
            steps {
                git branch: 'testejenkins', url: 'https://github.com/unimeduberlandia/novoportalclientes_front.git'
            }
        }

        stage('Instalar Pacotes') {
            steps {
                script {
                    if (isUnix()) {                        
                        dir('novoportal') {
                            sh 'npm cache clean --force'
                            sh 'rm -rf node_modules package-lock.json'
                            sh 'npm install'
                        } 
                    } else {
                        dir('novoportal') {
                            bat 'npm cache clean --force'
                            bat 'powershell -Command "Remove-Item -Recurse -Force node_modules, package-lock.json"'
                            bat 'npm install'
                        }                        
                    }
                }
            }
        }

        stage('Build do Projeto') {
            steps {
                script {
                    if (isUnix()) {
                        dir('novoportal') {
                            sh 'npm run build'
                        }
                    } else {
                        dir('novoportal') {
                            bat 'npm run build'
                        }
                    }
                }
            }
        }

        stage('Deploy para Servidor Apache') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'tar -czf build.tar.gz .next static'
                    } else {
                        bat 'tar -czf build.tar.gz .next static'
                    }


                    sshagent(['ssh-credentials-id']) {
                        sh """
                            scp build.tar.gz $SSH_USER@$SERVER_IP:/tmp/build.tar.gz
                        """

                        sh """
                            ssh $SSH_USER@$SERVER_IP <<EOF
                            mkdir -p $PROJECT_DIR
                            tar -xzf /tmp/build.tar.gz -C $PROJECT_DIR
                            rm /tmp/build.tar.gz
                            EOF
                        """
                    }
                }
            }
        }
    }

    post {
        // always {
            //cleanWs() 
        // }
        failure {
            echo "A execução do pipeline falhou. Verifique os logs para mais detalhes."
        }
    }
}
