import pandas as pd 
import os 

def cacul_score(dir_path):
    file_list = os.listdir(dir_path)

    result = {}
    for file_name in file_list:
        df = pd.read_csv(dir_path + file_name, index_col=0)
        result[file_name.split(".")[0]] = {}
        for col in df.columns:
            result[file_name.split(".")[0]][col] = df[col].values.tolist()
    return result
