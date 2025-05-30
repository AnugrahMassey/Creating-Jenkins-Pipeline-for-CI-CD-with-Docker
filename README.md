# DevOps Internship - Task 2: Creating-Jenkins-Pipeline-for-CI-CD-with-Docker

This repository demonstrates a simple Jenkins pipeline to automate building, testing, and deploying a Dockerized application. The pipeline triggers on every code commit to GitHub.

---

## 📋 Table of Contents
-Prerequisites                                            
-Repository Structure                                  
-Setup Instructions                                        
-Verification                                  
-FAQ                                                                         

---

## 🛠️ Prerequisites
-Jenkins server (installed locally or on a cloud instance)

-Docker installed and configured

-GitHub account (for repository and webhooks)

-Docker Hub account (for pushing images)

---

## 📂 Repository Structure
├── test                                                            
├── app.test.js                                                            
├── app.js                                                                  
├── Dockerfile                                                              
├── Jenkinsfile                                                             
└── README.md                                                               

---

## 🔧 Setup Instructions
1. Install Jenkins & Docker
Follow the Jenkins installation guide and Docker installation guide.

2. Configure Jenkins Plugins
Install these plugins via Manage Jenkins > Plugins:

Docker Pipeline

GitHub Integration

3. Set Up Docker Hub Credentials
In Jenkins, navigate to Manage Jenkins > Manage Credentials.

Add a Username with Password credential with your Docker Hub username/password. Use ID dockerhub-creds.

4. Create the Project Repository
Clone this repository or create your own with:

app.js (your application code)

Dockerfile

Jenkinsfile

5. Configure Jenkins Pipeline
In Jenkins, create a New Item > Pipeline.

Under Pipeline, select Pipeline script from SCM.

Configure:

SCM: Git

Repository URL: Your GitHub repo URL

Script Path: Jenkinsfile

6. Set Up GitHub Webhook
In your GitHub repo, go to Settings > Webhooks.

Add a webhook with:

Payload URL: http://localhost:8080/github-webhook/

Content Type: application/json

Triggers: Just the push event


---

## ✔️ Verification
Push a code change to GitHub.

Check the Jenkins dashboard for the triggered pipeline.

Confirm the Docker image is pushed to Docker Hub.

## Result

![WhatsApp Image 2025-05-27 at 6 57 06 PM](https://github.com/user-attachments/assets/2b137eba-dc34-47dc-bfe7-7c7768bd0720)


---

Happy automating! 🚀
For issues, open a GitHub ticket or contribute via PRs.
