def ideal_weight(height: int, gender: str = "male"):
    if gender.lower() == "male": return (72.7 * height) - 58
    elif gender.lower() == "female": return (62.1 * height ) - 44.7
    else: raise Exception("oof")

print(ideal_weight(1.75, "maquina de combate"))
