import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response } from "express";
import * as firebase from "firebase-admin";
import * as serviceAccount from "./firebaseServiceAccount.json";

const firebase_params = {
    tyep:serviceAccount.type,
    projectId:serviceAccount.project_id,
    privatekeyId:serviceAccount.private_key_id,
    privatekey: serviceAccount.private_key,
    clientEmail:serviceAccount.client_email,
    clientId:serviceAccount.client_id,
    authUri:serviceAccount.auth_uri,
    tokenUri:serviceAccount.token_uri,
    authProviderX509CertUrl:serviceAccount.auth_provider_x509_cert_url,
    clientC509CertUrl:serviceAccount.client_x509_cert_url
}

@Injectable
export class PreauthMiddleware implements NestMiddleware {
    defaultApp: firebase.app.App;
    
    constructor() {
        this.defaultApp = firebase.initializeApp({
            credential: firebase.credential.cert(firebase_params),
            databaseURL: "https://ts-invoice-b9ec1-default-rtdb.firebaseio.com"
        })
        
    }
    use(req: any, res: any, next: (error?: any) => void) {
        throw new Error("Method not implemented.");
    }
}