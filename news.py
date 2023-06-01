import requests
from bs4 import BeautifulSoup
import json
import time


def newsUpdate():
    while (True):
        time.sleep(60*60*6) # sleep (6 hours)
        
        url = 'https://www.dvfu.ru'
        response = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'})
        page = BeautifulSoup(response.text, 'html.parser')

        # newsMain_text
        newsMain_text = []
        for i in range(3):
            newsMain_text.append(page.find_all('div', class_="desc-post")[i].text)
            
        # newsDescription
        newsDescription = []
        for i in range(3):
            newsDescription.append(page.find_all("div", class_="tags text-right")[i].text.replace('\n', ' ').strip())

        # newsDate
        newsDate = []
        for i in range(3):
            newsDate.append(page.find_all("div", class_="date-post pull-left")[i].text.strip())

        # newsImage
        newsImage = []
        for i in range(3):
            newsImage.append(url + page.find_all('div', class_="img-post")[i].find_all('img')[0].get('src'))

        # newsMain_href
        newsMain_href = []
        for i in range(3):
            newsMain_href.append(url + page.find_all('div', class_="post")[i].find_all('a')[0].get('href'))

            
        # ==============================================
        numbers = ['one', 'two', 'three']
        with open('result.json', encoding='utf-8') as f:
            data = json.load(f)
            
            for i, n in enumerate(numbers):
                data['newsImage'][n] = newsImage[i]
                data['newsMain_href'][n] = newsMain_href[i]
                data['newsMain_text'][n] = newsMain_text[i]
                data['newsDescription'][n] = newsDescription[i]
                data['newsDate'][n] = newsDate[i]
                
            with open('result.json', 'w', encoding='utf-8') as f:
                json.dump(data, f, indent=4)
                
                
if __name__ == "__main__":
    newsUpdate()
