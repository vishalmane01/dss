
```
npm install
```

## Firebase Configuration

```
REACT_APP_API_KEY=your_key_goes_here
REACT_APP_MESSAGING_SENDER_ID=your_key_goes_here
REACT_APP_APP_ID=your_key_goes_here
REACT_APP_AUTH_DOMAIN=your_domain_goes_here
REACT_APP_DATABASE_URL=your_database_go_here
REACT_APP_PROJECT_ID=your_project_id
REACT_APP_STORAGE_BUCKET=your_storage_bucket
```

Change `Firestore Database` rules to:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

Change `Storage` rules to:
```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## CORS
`cors.json`: 

```
[
  {
    "origin": ["*"],
    "method": ["GET"],
    "maxAgeSeconds": 3600
  }
]
```

And then used gsutil to update it:
https://cloud.google.com/storage/docs/configuring-cors

## Run

```
npm start
```

