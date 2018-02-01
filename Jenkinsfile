#!/user/bin/env groovy
node('master'){
    //try{

        stage('check out'){
            checkout scm
        }

        stage('build'){
            
        }

        stage('front end test'){
            bat "npm run test"
            step([$class: 'JUnitResultArchiver', testResults: 'testResult/*.xml'])

        }

        stage('archive'){
            archiveArtifacts "src/**/*"
            archiveArtifacts "package.json"
        }
/*
    }
    catch(error){
        throw error
    }
    finally{

    }*/
}