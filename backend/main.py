from flask import Flask,jsonify,request
from flask_cors import CORS
import smtplib 
app = Flask(__name__)
CORS(app)

email = "kartikgoyal0852@gmail.com"
password = "dgzfvqbpznsbcrry"

@app.route('/form',methods=["POST","GET"])
def form_data():

    if request.method == "POST":
        data = request.json

        print(data)
        with smtplib.SMTP("smtp.gmail.com") as connection:
            connection.starttls()
            connection.login(user=email,password=password)
            connection.sendmail(from_addr=email,to_addrs=email,msg={data})
    
    return "Hello"    


if __name__ == "__main__":
    app.run(debug=True)