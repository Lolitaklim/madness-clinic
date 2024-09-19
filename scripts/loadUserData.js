fetch('./data.json')
  .then((response) => response.json())
  .then((data) => {
    document.getElementById('logoTextHeader').innerHTML = data.logoTextHeader
    document.getElementById('goal').innerHTML = data.goal
    document.getElementById('aboutTitle').innerHTML = data.aboutTitle
    document.getElementById('aboutTextBold').innerHTML = data.aboutTextBold
    document.getElementById('aboutText').innerHTML = data.aboutText

    // mission
    document.getElementById('missionTitle').innerHTML = data.missionTitle
    const missionParagraphsContainer =
      document.getElementById('missionParagraphs')
    data.missionParagraphs.forEach((paragraph) => {
      const paragraphElement = document.createElement('p')
      paragraphElement.classList.add('mission_text')
      paragraphElement.textContent = paragraph

      missionParagraphsContainer.appendChild(paragraphElement)
    })

    // service
    document.getElementById('servicesTitle').innerHTML = data.servicesTitle
    document.getElementById('servicesText').innerHTML = data.servicesText

    const servicesCardsContainer = document.getElementById('services_cards')
    data.servicesCards.forEach((card) => {
      const cardElement = document.createElement('div')
      cardElement.classList.add('services_cards_card')

      const titleElement = document.createElement('h3')
      titleElement.classList.add('card_title')
      titleElement.classList.add('raleway-extrabold')
      titleElement.textContent = card.title

      const textElement = document.createElement('p')
      textElement.classList.add('card_text')
      textElement.textContent = card.text

      cardElement.appendChild(titleElement)
      cardElement.appendChild(textElement)
      servicesCardsContainer.appendChild(cardElement)
    })

    // information

    const informationItemsContainer = document.getElementById('information')
    data.informationItems.forEach((item) => {
      const itemElement = document.createElement('div')
      itemElement.classList.add('information_item')
      itemElement.classList.add('container')

      const titleElement = document.createElement('div')
      titleElement.classList.add('information_title')
      titleElement.classList.add('raleway-extrabold')
      titleElement.textContent = item.title

      const textElement = document.createElement('div')
      textElement.classList.add('raleway-regular')
      textElement.classList.add('information_text')

      item.paragraphs.forEach((paragraph) => {
        const paragraphElement = document.createElement('p')
        paragraphElement.textContent = paragraph

        textElement.appendChild(paragraphElement)
      })

      itemElement.appendChild(titleElement)
      itemElement.appendChild(textElement)
      informationItemsContainer.appendChild(itemElement)
    })

    document.getElementById('logoTextFooter').innerHTML = data.logoTextFooter
    const phoneNumber = data.telephoneNumber
    const cleanedPhoneNumber = phoneNumber.replace(/[\s()-]/g, '')
    document.getElementById('telephoneNumber').textContent = phoneNumber
    document.getElementById('telephoneNumber').href =
      'tel:' + cleanedPhoneNumber
    document.getElementById('copyright').innerHTML = data.copyright
  })
  .catch((error) => console.error('Error fetching data:', error))
