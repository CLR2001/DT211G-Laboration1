export const arbetsprocessPage = `
  <section class="main-content-process">
    <h1>Arbetsprocess</h1>
    <section>
      <h2>Vite</h2>
      <p>
        Denna webbplats har kodats med hjälp av frontend verktyget Vite. Genom att använda Vite har jag kunnat automatisera flera delar som tidigare hade tagit mycket manuellt arbete. För att installera Vite används kommandot <i>npm create vite@latest</i> och för att sedan skapa en live server för kodning används kommandot <i>npm run dev</i>. Nu när grunden är lagd har följande delar automatiserats:
      </p>
      <ul>
        <li>
          <b>Minimering:</b><br>
          För att minska filstorlekarna på projektets filer tas alla onödiga tecken och utrymme bort så att koden i princip blir oläsbar för en människa men perfekt läsbar för en maskin. Beroende på antalet rader i koden kan den sparade storleken variera.
        </li>
        <li>
          <b>Konkatenering & transpilering:</b><br>
          Denna webbplats använder sig av Sass där det finns stöd att slå ihop sina css filer så att man kan hålla sin kod ren med separata scss-filer. Detta uppfylls genom att ha en main.scss där man skriver <i>@use '[Filens-namn]'</i> för alla sina olika scss-filer man vill kombinera. För att tala om för Sass att en fil ska slås ihop kan man sätta ett understreck som första tecken i filnamnet. Dessutom skrivs Sass koden om till vanlig css och JavaScript-filerna omvandlas till korrekt version vid automatiseringstillfället.
        </li>
        <li>
          <b>Bildoptimering:</b><br>
          Genom att använda <a href="https://www.npmjs.com/package/vite-plugin-image-optimizer">Vite Image Optimizer</a> har processen att optimera sina bilder automatiserats. En fil som heter <i>vite.config.js</i> används för att tala om vilka format man vill ska optimeras samt hur stor grad. På denna sida optimeras filer med ändelserna .avif, .webp, .png, .jpeg och .jpg. Beroende på formatet så är komprimeringsgraden olika stor beroende på hur bra formatet är på att komprimera utan att förlora kvalité.
        </li>
        <li>
          <p>
            <b>Bildgenerering:</b><br>
            I ett picture-element går det att ha flera olika storlekar på bilder som laddas in olika beroende på skärmbredd för att inte behöva ladda ner större fil än vad som behövs. Detta kan ta lång tid att göra manuellt så <a href="https://www.npmjs.com/package/vite-imagetools">Vite-Imagetools</a> användes för att automatisera processen. 
          </p>
          <p>
            Man kan använda pluginet manuellt så att man får ut en src till sin img-tagg men jag skrev en funktion i JavaScript som även automatiserade skapandet av ett picture-element. Funktionen fungerar genom att man matar in vissa värden så får man ut ett picture-element istället med avif, webp och jpg/jpeg som sources med olika sizes beroende på inmatningarna. Bilderna på denna webbplats har formaten avif eller webp med jpg som fallback. Varje format kan välja på en bredd på 400px, 600px, 800px eller 1200px.
          </p>
        </li>
      </ul>
    </section>

    <section>
      <h2>Publicering</h2>
      <p>
        Denna webbplats är publicerad till Netlify. Genom att synka sitt GitHub konto med Netlify kunde man snabbt använda sitt repository som källa för webbplatsen. Netlify kan känna av automatiskt att Vite är i användning och anpassar de inputs som behövs exempelvis att man ska publicera från dist-mappen och att ens build kommando är <i>npm run build</i>.
      </p>
    </section>

    <section>
      <h2>Versionshantering</h2>
      <p>
        Versionshanteringen för projektet har sköts med Git och GitHub. Ett remote repository skapades där regelbundna commits pushades upp. En commit gjordes när någon del av webbplatsen blev "klar". För att inte konstant uppdatera sin webbplats som är publicerad med ofärdiga ändringar användes branchen main för publicering och branchen development för redigering. När jag arbetade i development branchen gjorde jag regelbundan commits och när jag kände att den delen jag arbetat med var färdig så gjorde jag en merge till main och då såg Netlify ändringarna och publicerade det automatiskt.
      </p>
    </section>
  </section>
`;