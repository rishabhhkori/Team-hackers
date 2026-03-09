from flask import Flask,request,jsonify
import openai

app = Flask(__name__)

@app.route("/")
def home():
    return open("index.html").read()

@app.route("/check",methods=["POST"])
def check():

    data=request.json
    news=data["text"]

    if "invisible humans" in news:
        result="Fake News"
    else:
        result="Possibly Real"

    return jsonify({"result":result})

app.run()