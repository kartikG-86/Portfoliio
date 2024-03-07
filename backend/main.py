from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import smtplib

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*", "methods": ["GET", "POST", "PUT", "DELETE"],"allow_headers": ["Content-Type", "Authorization"]}}, supports_credentials=True)

email = "kartikgoyal0852@gmail.com"
password = "dgzfvqbpznsbcrry"

@app.route('/form', methods=["POST"])
@cross_origin()
def form_data():
    if request.method == "POST":
        data = request.json

        print(data)

        # Construct email message
        subject = "Message From Portfolio"
        body = f"Someone wants to connect with you!\nName: {data.get('name', '')}\nEmail: {data.get('email', '')}\nMessage: {data.get('message', '')}"
        message = f"Subject: {subject}\n\n{body}"

        try:
            # Send email
            with smtplib.SMTP("smtp.gmail.com") as connection:
                connection.starttls()
                connection.login(user=email, password=password)
                connection.sendmail(from_addr=email, to_addrs=email, msg=message)

            return jsonify({"message": "Email sent successfully"}), 200
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    return "Method Not Allowed", 405

if __name__ == "__main__":
    app.run(debug=True)
