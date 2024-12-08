from flask import Flask, send_file, request, jsonify
from flask_cors import CORS
import qrcode
from io import BytesIO
import os

app = Flask(__name__)
CORS(app)

@app.route('/generate-qr', methods=['POST'])
def generate_qr():
    try:
        data = request.json
        restaurant_id = data.get('restaurantId')
        restaurant_name = data.get('restaurantName')
        
        # Create QR code for the specific restaurant menu
        qr = qrcode.QRCode(
            version=1,
            error_correction=qrcode.constants.ERROR_CORRECT_L,
            box_size=10,
            border=4,
        )
        
        # The URL that the QR code will point to
        menu_url = f"http://localhost:3000/menu/{restaurant_id}"
        qr.add_data(menu_url)
        qr.make(fit=True)

        # Create QR code image
        img = qr.make_image(fill_color="black", back_color="white")
        
        # Save to BytesIO
        img_buffer = BytesIO()
        img.save(img_buffer, format='PNG')
        img_buffer.seek(0)
        
        return send_file(
            img_buffer,
            mimetype='image/png',
            as_attachment=True,
            download_name=f'{restaurant_name}-qr.png'
        )

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)