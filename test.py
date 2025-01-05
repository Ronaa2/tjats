import csv
import json
import pyperclip

# Chemin du fichier CSV
csv_file_path = r'C:\Users\ronaa\Downloads\Feuille de calcul sans titre - Feuille 1 (3).csv'

# Liste pour stocker les données JSON
json_data = []

# Ouvrir le fichier CSV
with open(csv_file_path, mode='r', encoding='utf-8') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    id_counter = 1
    
    for row in csv_reader:
        json_entry = {
            "id": id_counter,
            "name": row["Nom"],
            "logo": row["Logo"],
            "catégorie": row["Categorie"],
            "description": row["Description"],
            "drive": row["Drive"],
            "position": row["Position"],
            "catalogue": row["Catalogue"],
            "backgroundColor": "grey"
        }
        json_data.append(json_entry)
        id_counter += 1

# Convertir la liste en JSON
json_output = json.dumps(json_data, indent=4, ensure_ascii=False)

# Copier le JSON dans le presse-papiers
pyperclip.copy(json_output)
print("Les données JSON ont été copiées dans le presse-papiers.")
