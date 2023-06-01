fetch("result.json")
    .then(response => response.json())
    .then(data => {
        console.log(data.sentence)

        var newsImage1 = data.newsImage.one
        var newsImage2 = data.newsImage.two
        var newsImage3 = data.newsImage.three

        var newsMain1_href = data.newsMain_href.one
        var newsMain2_href = data.newsMain_href.two
        var newsMain3_href = data.newsMain_href.three

        var newsMain1_text = data.newsMain_text.one
        var newsMain2_text = data.newsMain_text.two
        var newsMain3_text = data.newsMain_text.three

        var newsDescription1 = data.newsDescription.one
        var newsDescription2 = data.newsDescription.two
        var newsDescription3 = data.newsDescription.three

        var newsDate1 = data.newsDate.one
        var newsDate2 = data.newsDate.two
        var newsDate3 = data.newsDate.three


        document.getElementById('newsImage1').innerHTML = '<img src="'+ newsImage1 +'" alt="Blog"></img>'
        document.getElementById('newsImage2').innerHTML = '<img src="'+ newsImage2 +'" alt="Blog"></img>'
        document.getElementById('newsImage3').innerHTML = '<img src="'+ newsImage3 +'" alt="Blog"></img>'

        document.getElementById('newsMain1').innerHTML = '<a href="'+ newsMain1_href +'">'+ newsMain1_text +'</a>'
        document.getElementById('newsMain2').innerHTML = '<a href="'+ newsMain2_href +'">'+ newsMain2_text +'</a>'
        document.getElementById('newsMain3').innerHTML = '<a href="'+ newsMain3_href +'">'+ newsMain3_text +'</a>'

        document.getElementById('newsDescription1').innerText = newsDescription1
        document.getElementById('newsDescription2').innerText = newsDescription2
        document.getElementById('newsDescription3').innerText = newsDescription3

        document.getElementById('newsDate1').innerText = newsDate1
        document.getElementById('newsDate2').innerText = newsDate2
        document.getElementById('newsDate3').innerText = newsDate3

        document.getElementById('newsHref1').innerHTML = '<a href="'+ newsMain1_href +'" class="details-btn"><i class="fas fa-long-arrow-alt-right"></i></a>'
        document.getElementById('newsHref2').innerHTML = '<a href="'+ newsMain2_href +'" class="details-btn"><i class="fas fa-long-arrow-alt-right"></i></a>'
        document.getElementById('newsHref3').innerHTML = '<a href="'+ newsMain3_href +'" class="details-btn"><i class="fas fa-long-arrow-alt-right"></i></a>'
});