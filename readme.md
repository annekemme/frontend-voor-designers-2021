# Frontend voor Designers - opdracht 3: Een interactie uitwerken met externe data

Voor deze opdracht ga je een functionaliteit ontwerpen met externe data. De data is JSON die met een [REST API](https://developer.mozilla.org/en-US/docs/Glossary/REST) van een externe bron wordt ingeladen met Javascript.  Als de data geladen is moeten gebruikers je ontwerp op verschillende manieren kunnen bedienen. Verschillende states zijn vormgeven en worden op het juiste moment getoond.

Lees hier de [opdrachtbeschrijving](./opdrachtbeschrijving.md).


# Project titel
Beschrijf hier je eigen project.
En voeg een link naar je demo toe.

Voor het vak Frontend heb ik een website gemaakt met JSON. De JSON code hebben we gekoppeld met de HTML en uiteindelijk een ontwerp gemaakt. Ik heb een website gemaakt over films en de uitstraling van Netflix geprobeerd na te maken. 

## interface
Leg de interface uit.

In de demo heb je interface design principles 04, 08, 09 & 11 van [Principles of User Interface Design](http://bokardo.com/principles-of-user-interface-design/) toegepast. Hoe heb je dat gedaan?

In de demo heb je meerdere [UI events](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent) toegepast. Hoe heb je dat gedaan?

IN de demo heb je een aantal states van de [UI stack](https://www.scotthurff.com/posts/why-your-user-interface-is-awkward-youre-ignoring-the-ui-stack/) toegepast. Hoe heb je dat gedaan?

Om de interface zo comfortabel mogelijk te maken heb ik gekozen voor een zwarte achtergrond met witte lettertype. Het lettertype is een gemakkelijk leesbaar lettertype. Dit zorgt ervoor dat de user in control blijven. 

Voor de volgende stap zou ik graag veel willen veranderen. Ik had graag gebruik gemaakt van een caroussel waar de afbeeldingen in zaten. Wanneer je dan op de afbeelding klikte, kreeg je de informatie over de film te zien. 

Omdat de website wordt gebruikt zoals je verwacht is hij heel gemakkelijk om te gebruiken. Je scrollt naar beneden om de informatie te vinden. 

Er is zeker een sterke visuele hierarchie. De website heeft een zwarte achtergrond en witte lettertype wat hierop duidelijk te zien is. De tekst staat van groot naar kleiner en de afbeeldingen staan duidelijk in beeld. 

Ik heb de loading state toegepast aan mijn ontwerp. Omdat ik niet gebruik maak van verschillende pagina's heb ik gekozen om de loading state op de beginpagina toe te passen. 


## code
Zoals je kan zien heb ik een JSON bestand ingeladen in mijn HTML bestand. Ik heb eerst het JSON bestand in de script bestand ingeladen en een var gegegeven. Deze var heb ik aangezet zodat het JSON bestand in zijn werking wordt gezet. Daarna heb ik van iedere punt van de film een var gemaakt. Zoals je ziet heb ik een var gemaakt voor article etc. Dit is gedaan zodat hij gemakkelijk te stijlen is. Uiteindelijk is natuurlijk ook de html en css gekoppeld. Hierin heb ik geprobeerd iets moois te maken. Ik had gehoopt dat een caroussel gelukt was maar dit is helaas niet het geval. 