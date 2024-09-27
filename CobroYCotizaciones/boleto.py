boletos_emitidos = []

def emitir_boleto(cliente, vuelo_id):
    boleto = {
        "cliente": cliente,
        "vuelo": vuelo_id,
        "boleto_id": f"B-{len(boletos_emitidos) + 1}"
    }
    boletos_emitidos.append(boleto)
    return boleto

def ver_boleto(cliente):
    for boleto in boletos_emitidos:
        if boleto["cliente"] == cliente:
            return boleto
    return "Boleto no encontrado."
