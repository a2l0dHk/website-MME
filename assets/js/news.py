import sys
import requests
from bs4 import BeautifulSoup


data_to_pass_back = list()
url = 'https://www.dvfu.ru/'

response = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'})
page = BeautifulSoup(response.text, 'html.parser')

# newsMain_text
for i in range(2):
    data_to_pass_back.append(page.find_all('div', class_="desc-post")[i].text)
    
    
input =sys.argv[1]
output = data_to_pass_back
print(tuple(data_to_pass_back))
sys.stdout.flush()