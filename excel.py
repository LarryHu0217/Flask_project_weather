import pandas as pd




if __name__ == '__main__':
    # creating the DataFrame
    # cars_data = pd.DataFrame({'Cars': ['BMW', 'Audi', 'Bugatti',
    #                                    'Porsche', 'Volkswagen'],
    #                           'MaxSpeed': [220, 230, 240, 210, 190],
    #                           'Color': ['Black', 'Red', 'Blue',
    #                                     'Violet', 'White']})
    # cars_data = pd.DataFrame({'Cars': ['BMW'],
    #                           'MaxSpeed': [220],
    #                           'Color':['White']})
    cars_data = pd.DataFrame(
        {"description": ["few clouds"], "icon": ["02d"], "main": ["Clouds"], "temp": [34.05]})
    # writing to Excel
    datatoexcel = pd.ExcelWriter('CarsData3.xlsx')

    # write DataFrame to excel
    cars_data.to_excel(datatoexcel)

    # save the excel
    datatoexcel.save()
    print('DataFrame is written to Excel File successfully.')