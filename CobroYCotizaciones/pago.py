pagos_realizados = []

def procesar_pago(cliente, monto, metodo_pago):
    pago = {"cliente": cliente, "monto": monto, "metodo_pago": metodo_pago}
    pagos_realizados.append(pago)
    return "Pago procesado correctamente."

def ver_pagos(cliente):
    pagos_cliente = [pago for pago in pagos_realizados if pago["cliente"] == cliente]
    return pagos_cliente if pagos_cliente else "No se encontraron pagos."
