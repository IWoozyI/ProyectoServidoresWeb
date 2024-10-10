import unittest
import json
from main import app


class MainAppTestCase(unittest.TestCase):

    def setUp(self):
        # Se configura el entorno para las pruebas
        self.app = app.test_client()
        self.app.testing = True

    def test_login(self):
        # Test para el login (debes ajustar los datos según tu implementación)
        response = self.app.post('/login', json={
            'usuario': 'Gabriel',
            'password': '211214'
        })
        self.assertEqual(response.status_code, 200)
        self.assertIn('token', response.json)

    def test_buscar_vuelo(self):
        response = self.app.get('/buscar_vuelo', query_string={
            'origen': 'Madrid',
            'destino': 'Manta',
            'fecha': '2024-10-05'
        })
        self.assertEqual(response.status_code, 200)
        self.assertIsInstance(response.json, list)

    def test_reservar_vuelo(self):
        response = self.app.post('/reservar_vuelo', json={
            'vuelo_id': 1,
            'cliente': 'Gabriel'
        })
        self.assertEqual(response.status_code, 201)
        self.assertIn('message', response.json)

    def test_eliminar_reserva(self):
        response = self.app.delete('/eliminar_reserva', json={
            'id': 9
        })
        self.assertEqual(response.status_code, 200)
        self.assertIn('message', response.json)

    def test_procesar_pago(self):
        response = self.app.post('/procesar_pago', json={
            'cliente': 'Gabriel',
            'monto': 100.0,
            'metodo_pago': 'Debito'
        })
        self.assertEqual(response.status_code, 200)
        self.assertIn('message', response.json)

    def test_ver_pagos(self):
        response = self.app.get('/ver_pagos', query_string={
            'cliente': 'Gabriel'
        })
        self.assertEqual(response.status_code, 200)
        self.assertIsInstance(response.json['pagos'], list)


    def test_ver_itinerario(self):
        response = self.app.get('/ver_itinerario', query_string={
            'cliente': 'Gabriel'
        })
        self.assertEqual(response.status_code, 200)
        self.assertIsInstance(response.json, dict)

    def test_procesar_reembolso(self):
        response = self.app.post('/procesar_reembolso', json={
            'cliente': 'Gabriel',
            'monto': 150.0,
            'motivo': 'Cancelación de vuelo'
        })
        self.assertEqual(response.status_code, 200)
        self.assertIn('message', response.json)


if __name__ == '__main__':
    unittest.main()
