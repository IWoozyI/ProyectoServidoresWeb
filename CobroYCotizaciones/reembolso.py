reembolsos_realizados = []

def procesar_reembolso(cliente, monto):
    reembolso = {"cliente": cliente, "monto": monto}
    reembolsos_realizados.append(reembolso)
    return "Reembolso procesado correctamente."

def ver_reembolsos(cliente):
    reembolsos_cliente = [reembolso for reembolso in reembolsos_realizados if reembolso["cliente"] == cliente]
    return reembolsos_cliente if reembolsos_cliente else "No se encontraron reembolsos."
