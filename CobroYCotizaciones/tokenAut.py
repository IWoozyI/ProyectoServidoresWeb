import jwt
from datetime import datetime, timedelta, timezone
from flask import jsonify, request
from functools import wraps

SECRET_KEY = "211214"

def generar_token(usuario_id):
    try:
        payload = {
            'exp': datetime.now(timezone.utc) + timedelta(hours=1),
            'iat': datetime.now(timezone.utc),
            'sub': usuario_id
        }
        token = jwt.encode(payload, SECRET_KEY, algorithm='HS256')
        return token
    except Exception as e:
        return str(e)

def token_requerido(f):
    @wraps(f)
    def decorador(*args, **kwargs):
        token = request.headers.get('Authorization')
        if not token:
            return jsonify({'mensaje': 'Token es requerido'}), 403
        try:
            token = token.split(" ")[1] 
            payload = jwt.decode(token, SECRET_KEY, algorithms=['HS256'])
            usuario_id = payload['sub']
        except jwt.ExpiredSignatureError:
            return jsonify({'mensaje': 'El token ha expirado'}), 403
        except jwt.InvalidTokenError:
            return jsonify({'mensaje': 'Token inválido'}), 403

        return f(usuario_id, *args, **kwargs)
    return decorador

def login():
    datos = request.get_json()
    if datos['usuario'] == 'Gabriel' and datos['password'] == '211214':
        token = generar_token(usuario_id=1)
        return jsonify({'token': token}), 200
    return jsonify({'mensaje': 'Credenciales inválidas'}), 401
