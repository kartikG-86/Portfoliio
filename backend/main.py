from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from flask_mail import Mail, Message

app = Flask(__name__)
CORS(app, resources={r"/form": {"origins": "*", "methods": ["POST"]}}, supports_credentials=True)

# Flask-Mail configuration
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'kartikgoyal0852@gmail.com'  # Replace with your email
app.config['MAIL_PASSWORD'] = 'dgzfvqbpznsbcrry'         # Replace with your password

mail = Mail(app)

@app.route('/form', methods=["POST"])
@cross_origin()
def form_data():
    if request.method == "POST":
        data = request.json

        # Construct email message
        subject = "Message From Portfolio"
        body = f"Someone wants to connect with you!\nName: {data.get('name', '')}\nEmail: {data.get('email', '')}\nMessage: {data.get('message', '')}"

        try:
            # Send email asynchronously
            send_email(subject, body)
            return jsonify({"message": "Email sent successfully"}), 200
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    return "Method Not Allowed", 405

def send_email(subject, body):
    msg = Message(subject, sender='kartikgoyal0852@gmail.com', recipients=['kartikgoyal0852@gmail.com'])
    msg.body = body

    mail.send(msg)

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port="8080")
