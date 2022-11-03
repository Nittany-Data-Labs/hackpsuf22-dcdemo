# Scripts
`python -m venv env`<br>
`source env/bin/activate`<br>
`export FLASK_APP=run.py`<br>
`export FLASK_ENV=development`<br>
`flask run`<br>
Using Python 3.9.8<br>
## Dev Notes:
Check in with Raymond before changing directory structure. Changes could unknowingly break Dockerfile.<br>

## Run Dev Server:

1. `docker build -t lightsail-flask-dev:latest -f Dockerfile.dev .`
2. `docker run -p 5000:5000 --name flask-dev lightsail-flask-dev:latest`

## Run Production Server:

1. `docker build -t lightsail-flask-prod:latest -f Dockerfile .`
2. `docker run -p 5000:5000 --name flask-prod lightsail-flask-prod:latest`
