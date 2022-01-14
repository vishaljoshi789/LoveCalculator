var name1 = document.getElementsByName("name1")[0];
var name2 = document.getElementsByName("name2")[0];
var zodiac1 = document.getElementsByName("zodiac1")[0];
var zodiac2 = document.getElementsByName("zodiac2")[0];

var zodiac_comp = {
    "Aries": {
        "Aries": [51, `<h3>When two Aries come together in a love affair, there’s bound to be fireworks.</h3>
        <p>These two are always competing, which can make for quite a challenging love match. An Aries-Aries relationship is like looking into a mirror: Aries understands their partner’s need for independence because they’re the same way. At times, however, they can be possessive and turn into two Rams butting heads. They have to learn not to compete with one another so much. If they can do so, their partnership can be extremely powerful.</p>`],
        "Taurus": [37, `<h3>When Aries and Taurus come together in a love affair, the partnership is a natural union of Love, represented by Taurus, and Passion, represented by Aries.</h3>
        <p>This relationship is all about balance. Aries wants to jump right in and get into it, while Taurus prefers to go much more slowly. This can create a problem; Taurus loves to be wooed and romanced — two concepts that are basically foreign to straightforward, brash, totally unsubtle Aries. An Aries-Taurus partnership can be a great learning experience for both Signs. Taurus can help Aries rein in some of the more foolish, impractical impulses, and Aries can help Taurus be more spontaneous and adventurous.</p>`],
        "Gemini": [84, `<h3>When Aries and Gemini come together in a love affair, they connect on a physical as well as an intellectual level.</h3>
        <p>These two Signs love activity and stay optimistic even in the most trying of times. Signs that are two apart in the Zodiac usually enjoy excellent communication and a deep understanding of one another. Aries’s independent, pioneering spirit is attractive to Gemini, who also values independence. If Gemini feels that Aries is being too controlling or if Aries takes Gemini’s flirtatious nature too seriously, arguments may set the tone of the relationship. They create a good balance together: Aries wants to experience things and Gemini wants to discuss them. Together they can make all kinds of new discoveries that they might have missed alone.</p>`],
        "Cancer": [43, `<h3>When Aries and Cancer come together in a love affair, it’s a case of opposites attracting.</h3>
        <p>Aries is rash and brash while Cancer is sensitive and emotional. Aries can certainly be emotional — in a fiery, impetuous way that can completely overwhelm Cancer. Even though Cancer usually likes to take time with relationships, Aries’s whirlwind approach can be extremely stimulating. Aries, on the other hand, may find the Cancerian sensitivity appealing; it’s a good balance for the typical Aries bluntness. Troubles may arise if Cancer’s mood swings or Aries’s aggression becomes hurtful. Both Signs must take time to listen to their partner’s needs and understand that they’re coming from different directions to meet a common goal.</p>`],
        "Leo": [98, `<h3>When Aries and Leo come together in a love affair, the sparks will fly! Both are Fire Signs, passionate and dynamic, with a healthy love of sportsmanship and competition.</h3>
        <p>There is a lot of action in this relationship. Both Signs want to be the boss and problems can arise when their equally-large egos get in the way. These partners have genuine admiration and respect for each other, but they need to learn to take turns commanding and giving orders — even when they’re only choosing a movie at the video store! </p>`],
        "Virgo": [62, `<h3>When Aries and Virgo come together in a love match, they may think at first that they have nothing in common and nothing to learn from one another.</h3>
        <p>This relationship takes time to develop as each partner must learn to understand where the other is coming from. Aries and Virgo can seem like total opposites: While Aries is brash, dominant and aggressive, always jumping into new things and almost always impatient, Virgo is detail-oriented and quiet, even shy, and works patiently toward long-term goals. Aries’s energy is fiery and impetuous while Virgo’s is much slower and more grounded. It’s these very differences, however, that can teach Aries and Virgo so much, once they just look beneath one another’s surfaces to see what lies beneath.</p>`],
        "Libra": [86, `<h3>When Aries and Libra come together in a love affair, the inherent polarity of the Zodiac is invoked.</h3>
        <p>Aries and Libra are directly opposite one another in the Zodiac — 180 degrees apart. Each Sign possesses qualities that the other lacks; combined with Libra’s natural yen for harmony, this can be a relationship that enjoys great balance. Aries is the Sign of Self while Libra is the Sign of Partnership, and the differences continue: Aries is impulsive, excitable and ready to jump right into something new and exciting, while Libra is indecisive, peace-loving and prefers a calm, smooth approach. Aries can learn from Libra that their own way isn’t necessarily the best way.</p>`],
        "Scorpio": [51, `<h3>When Aries and Scorpio come together in a love match, it can be the kind of relationship where they both wonder how they ever managed apart.</h3>
        <p>Both Signs love power and they can achieve just about anything — as long as they learn to share the spotlight. Scorpio is very focused; once they set their sights on Aries, Aries is most likely powerless to resist! Scorpio has a deeper and more complex devotion to this relationship than does Aries.</p>`],
        "Sagittarius": [92, `<h3>When Aries and Sagittarius come together in a love affair, it can be a match made in heaven! These partners have much in common — similar energies and interests — and are highly compatible.</h3>
        <p>Both are explorers and pioneers. This relationship is torrid and exciting and both partners are always ready for a new adventure. They both crave life experience of their own and don’t like to waste time just reading about it or listening to others tell about theirs. They do need to be careful, however: This could be an accident-prone relationship as Aries is always in a rush and Sagittarius tends to look at everything but the obvious. Also, as much as these two have in common, it may be difficult to maintain a long-term relationship when both parties have so much energy to start new things — but not much interest in following through.</p>`],
        "Capricorn": [46, `<h3>When Aries and Capricorn come together in a love match, they must work hard to maintain their mutual energy.</h3>
        <p>Their approaches can seem almost opposite to one another — Aries is all about acting without bothering to consider where the action is directed or what it will attain, while Capricorn is all about judging whether (or how much) it will benefit them before they take action. Aries moves fast and, to Capricorn, at least, seems to risk it all. Capricorn abhors unnecessary risk. They move at a slower pace, working inexhaustibly toward well-defined goals (usually related to career or other forms of public advancement). Both partners always get where they’re going, only in different ways — and usually where they’re going is totally different, too!.</p>`],
        "Aquarius": [79, `<h3>When Aries and Aquarius come together in a love match, the combination of Aquarius vision and Aries action makes them a highly creative pair.</h3>
        <p>Their relationship is anything but static; they can be competitive, but life with these two is never dull! Zodiac Signs that are two apart tend to have a special connection, and these are no exception. They are great friends as they communicate really well. They have a special understanding of one another’s idealistic, enthusiastic outlook on life. They both crave excitement and new experiences — the wilder and stranger, the better. They’re both into thrills and showing off.</p>`],
        "Pisces": [68, `<h3>When Aries and Pisces come together in a love match, they can be very good for one another.</h3>
        <p>Aries is a strong Sign; they are almost completely prey to their impulses, which they follow without a second thought to the outcome or possible consequences. Dreamy Pisces is much quieter and more internally-focused; they’re the Poets of the Zodiac. On the surface an Aries and a Pisces may seem an unlikely pair, but when there’s love involved, they can truly fulfill one another’s needs. Pisces is very intuitive, both as a person and as a lover; Aries must take care to return this favor so Pisces won’t begin to see their Aries partner as stingy and selfish.</p>`],
        "svg": `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
        <!-- Created with Inkscape (http://www.inkscape.org/) -->
        
        <svg
           xmlns:dc="http://purl.org/dc/elements/1.1/"
           xmlns:cc="http://creativecommons.org/ns#"
           xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
           xmlns:svg="http://www.w3.org/2000/svg"
           xmlns="http://www.w3.org/2000/svg"
           xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
           xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
           width="50.86133mm"
           height="50.86133mm"
           viewBox="0 0 718.79998 718.79998"
           id="svg2"
           version="1.1"
           inkscape:version="0.91 r13725"
           sodipodi:docname="AriesDrawing5.svg">
          <defs
             id="defs4">
            <filter
               inkscape:label="Modified combined Lighting"
               inkscape:menu="Bevels"
               inkscape:menu-tooltip="Basic specular bevel to use for building textures"
               style="color-interpolation-filters:sRGB"
               id="filter125483"
               height="1.04"
               width="1.04"
               y="-0.02"
               x="-0.02">
              <feGaussianBlur
                 stdDeviation="6"
                 in="SourceGraphic"
                 result="result0"
                 id="feGaussianBlur125485" />
              <feDiffuseLighting
                 lighting-color="#ffffff"
                 diffuseConstant="1"
                 surfaceScale="4"
                 result="result5"
                 id="feDiffuseLighting125487">
                <feDistantLight
                   elevation="45"
                   azimuth="235"
                   id="feDistantLight125489" />
              </feDiffuseLighting>
              <feComposite
                 k1="1.4"
                 in2="SourceGraphic"
                 in="result5"
                 result="fbSourceGraphic"
                 operator="arithmetic"
                 id="feComposite125491"
                 k2="0"
                 k3="0"
                 k4="0" />
              <feGaussianBlur
                 result="result0"
                 in="fbSourceGraphic"
                 stdDeviation="6"
                 id="feGaussianBlur125493" />
              <feSpecularLighting
                 specularExponent="25"
                 specularConstant="1"
                 surfaceScale="4"
                 lighting-color="#ffffff"
                 result="result1"
                 in="result0"
                 id="feSpecularLighting125495">
                <feDistantLight
                   azimuth="235"
                   elevation="45"
                   id="feDistantLight125497" />
              </feSpecularLighting>
              <feComposite
                 k3="1"
                 k2="1"
                 operator="arithmetic"
                 in="fbSourceGraphic"
                 in2="result1"
                 result="result4"
                 id="feComposite125499"
                 k1="0"
                 k4="0" />
              <feComposite
                 operator="in"
                 result="fbSourceGraphic"
                 in2="SourceGraphic"
                 in="result4"
                 id="feComposite125501" />
              <feColorMatrix
                 result="fbSourceGraphicAlpha"
                 in="fbSourceGraphic"
                 values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
                 id="feColorMatrix125639" />
              <feGaussianBlur
                 id="feGaussianBlur125641"
                 stdDeviation="1.1000000000000001 1.1299999999999999"
                 result="blur"
                 in="fbSourceGraphic" />
              <feColorMatrix
                 id="feColorMatrix125643"
                 values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 50 0 "
                 result="colormatrix" />
              <feComposite
                 id="feComposite125645"
                 in2="fbSourceGraphic"
                 in="colormatrix"
                 operator="in" />
            </filter>
            <filter
               inkscape:collect="always"
               style="color-interpolation-filters:sRGB"
               id="filter126677"
               x="-0.099000007"
               width="1.198"
               y="-0.099000007"
               height="1.198">
              <feGaussianBlur
                 inkscape:collect="always"
                 stdDeviation="2.4750002"
                 id="feGaussianBlur126679" />
            </filter>
          </defs>
          <sodipodi:namedview
             id="base"
             pagecolor="#ffffff"
             bordercolor="#666666"
             borderopacity="1.0"
             inkscape:pageopacity="0.0"
             inkscape:pageshadow="2"
             inkscape:zoom="0.73594882"
             inkscape:cx="359.39999"
             inkscape:cy="433.99757"
             inkscape:document-units="px"
             inkscape:current-layer="layer1"
             showgrid="false"
             inkscape:window-width="1366"
             inkscape:window-height="705"
             inkscape:window-x="-8"
             inkscape:window-y="-8"
             inkscape:window-maximized="1"
             fit-margin-top="0"
             fit-margin-left="0"
             fit-margin-right="0"
             fit-margin-bottom="0" />
          <metadata
             id="metadata7">
            <rdf:RDF>
              <cc:Work
                 rdf:about="">
                <dc:format>image/svg+xml</dc:format>
                <dc:type
                   rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
                <dc:title></dc:title>
              </cc:Work>
            </rdf:RDF>
          </metadata>
          <g
             inkscape:label="Layer 1"
             inkscape:groupmode="layer"
             id="layer1"
             transform="translate(-770.78894,980.99174)">
            <g
               id="g91385">
              <circle
                 transform="matrix(10,0,0,10,-3421.7007,-4530.6759)"
                 id="circle124468-6"
                 r="30"
                 cy="390.90842"
                 cx="455.18896"
                 style="fill:#000000;fill-opacity:1;stroke:none;stroke-opacity:1;filter:url(#filter126677)" />
              <circle
                 transform="matrix(10,0,0,10,-3421.7007,-4530.6759)"
                 id="circle124468"
                 r="30"
                 cy="388.90842"
                 cx="453.18896"
                 style="fill:#de0101;fill-opacity:1;stroke:none;stroke-opacity:1;filter:url(#filter125483)" />
              <path
                 id="path4904"
                 d="m 1115.3316,-827.20099 c -2.9475,0.333 -3.4787,4.65768 -1.042,6.02793 4.8668,0.54675 9.4389,2.34882 13.9749,4.09257 -1.9732,3.12075 -5.7803,6.44622 -6.9728,10.57947 -1.7573,3.30749 -2.5561,7.08534 -2.9025,10.79334 l -0.02,0.19125 c -0.9473,6.85575 -0.5583,14.202 2.4455,20.53125 5.22,14.8275 24.9975,22.53132 38.4795,14.13882 3.0285,-1.53225 5.0065,-4.53817 5.7287,-7.80291 1.1655,-3.7755 1.8426,-7.70382 1.6896,-11.66382 0.162,-9.00225 -3.4154,-18.04977 -8.9391,-25.08327 -5.7083,-7.63651 -13.806,-13.55604 -22.7317,-16.88379 -5.733,-2.36025 -11.799,-3.86334 -17.8988,-4.92084 l -1.8112,0 z m 33.5068,1.62459 c -2.358,0.1395 -4.808,0.31275 -7.0805,0.54 4.1985,1.82475 8.2145,4.03416 12.1092,6.44166 5.166,3.9465 10.6515,8.59947 12.2895,15.16047 1.5098,0.92025 2.9745,-0.6885 4.068,-1.6155 4.8488,-5.33475 1.3615,-13.80147 -3.6155,-17.74572 -5.3707,-2.87325 -11.8622,-2.68866 -17.7707,-2.78091 z m 64.5296,1.26954 c -3.0096,0.0477 -6.0042,0.80622 -8.5743,2.2788 -1.512,0.648 -0.9765,2.66382 -0.585,3.87207 1.2127,3.4515 2.5921,7.03563 5.4383,9.48588 3.8948,5.43825 6.6801,11.5875 8.8671,17.8875 1.3995,5.47425 2.871,11.07899 2.61,16.785 0.4388,0.162 0.9542,-0.40716 1.2129,-0.76716 0.043,-0.0477 0.1259,-0.14607 0.1664,-0.19332 9.09,-7.49925 10.5525,-20.88459 8.9775,-31.85334 -0.3375,-3.49875 -1.7323,-6.98406 -3.5593,-10.01706 -3.0078,-5.06898 -8.8082,-7.56918 -14.5536,-7.47837 z m 26.5296,2.64897 c -0.6,-0.0342 -1.1731,0.2574 -1.201,0.95733 -1.3365,6.13575 1.5818,12.26004 0.468,18.42954 -0.8685,11.13975 -6.4372,20.98791 -10.5209,31.13091 0,1.31175 -2.0092,4.83093 0.027,5.18868 4.8847,-2.93175 10.3544,-5.54634 13.9454,-10.13409 3.1118,-5.463 5.535,-11.484 6.48,-17.7255 l 0,-4.26375 c -0.4972,-8.18325 -3.0127,-16.36854 -7.9942,-22.95204 -0.2549,-0.38097 -0.7378,-0.60453 -1.2044,-0.63108 z m -60.8871,0.55305 c -0.5931,0 -1.187,0.0279 -1.7814,0.0711 -0.765,0.0108 -1.2353,0.42525 -0.6908,1.36125 1.008,6.3675 1.9395,14.1009 -2.8125,19.25115 -1.0845,1.35225 -2.9294,1.89216 -3.9779,3.19716 1.1677,9.4095 4.331,19.08225 1.7412,28.54125 -1.2847,4.059 -2.6909,8.54775 -6.2842,11.0925 1.2645,7.14375 6.7702,12.68766 11.763,17.59041 3.6045,3.37275 7.5759,6.66252 12.3841,8.09577 11.0678,2.151 22.8689,1.30698 33.3517,6.02298 4.2007,1.5705 6.3653,6.39909 10.9283,7.27209 5.0873,-0.378 7.2291,-7.32609 6.4664,-11.33334 -5.094,-0.576 -11.7404,-2.82816 -12.1251,-8.88966 0.2182,-4.34025 0.2946,-8.70516 0.1438,-13.05666 -4.9612,-6.28425 -9.2383,-13.38291 -11.3601,-21.15666 -1.3905,-13.32 -4.6734,-27.35568 -14.1504,-37.36368 -6.037,-6.43146 -14.7002,-10.75497 -23.5961,-10.69557 z m 9.6968,44.83545 c 6.5138,0.0792 11.6587,5.81328 14.7206,11.16171 -4.887,2.5065 -12.4448,3.77766 -16.1933,-1.14084 -2.043,-1.59975 -4.8531,-1.73034 -6.7926,-3.49659 0.297,-2.988 2.8215,-5.76432 5.805,-6.28632 0.8399,-0.17199 1.6604,-0.24768 2.4603,-0.23796 z m -46.8609,22.54356 c -0.9455,-0.0153 -1.7192,0.43911 -2.098,1.91565 -2.9633,5.89725 -3.9803,13.40325 -1.5188,19.5525 1.467,5.22225 5.4856,9.63909 9.8753,12.55959 0.061,0.0513 0.1822,0.15741 0.243,0.20916 3.9037,3.76875 7.6275,7.85484 11.43,11.76084 16.596,18.621 30.303,39.94425 39.3345,63.25871 1.0575,2.38275 1.719,4.96107 3.1747,7.14582 3.15,2.781 8.442,1.75068 10.8045,-1.55457 2.1848,-2.1465 4.3178,-4.61502 5.6296,-7.40952 7.0582,-11.6325 6.5992,-26.34728 3.6,-39.15878 -0.666,-4.23225 -2.0903,-8.45991 -3.6271,-12.37041 -2.3917,-7.79625 -6.2325,-15.13593 -10.0462,-22.33368 -1.2105,-1.62 -2.1375,-4.62825 -4.698,-4.10625 -11.9385,1.368 -23.5553,-4.3875 -31.3583,-13.158 0.7088,3.34575 0.5964,6.7905 0.5042,10.188 -0.6908,2.6325 -1.1589,5.34618 -2.3109,7.84368 l -0.1866,0 c -0.7853,-3.37275 -0.4682,-6.95223 -1.6337,-10.25298 0.01,-0.081 0.016,-0.24759 0.021,-0.33084 -1.4017,-5.90175 -3.3727,-11.97675 -6.5767,-17.08875 -0.468,-2.232 -2.0812,-4.00041 -2.9362,-6.08166 -3.9038,1.2285 -8.0504,1.3005 -12.1229,0.91125 -0.092,-0.0153 -0.2814,-0.045 -0.3759,-0.0612 -1.4976,-0.0846 -3.5509,-1.41696 -5.1268,-1.44315 z m 94.7669,4.41495 c -0.5943,-0.009 -1.1817,0.0126 -1.7529,0.0432 -2.7405,0.6165 -2.8034,4.12875 -2.6121,6.35625 0.2317,2.49075 0.4319,5.63391 2.5266,7.23591 2.0408,3.0735 8.6557,3.93759 9.441,-0.87966 1.7505,-2.907 3.6382,-8.41941 -0.2363,-10.82916 -2.0859,-1.47897 -4.7911,-1.90638 -7.3663,-1.92654 z m -103.8399,23.87385 c -0.3116,0 -0.6289,0.0135 -0.9517,0.0531 -1.17,0.027 -2.5268,1.35899 -1.6875,2.47499 2.448,2.94076 4.7632,6.28633 7.155,9.05383 1.44,2.331 3.0217,4.81274 4.9792,6.77249 1.4512,2.76076 3.672,5.19076 5.58,7.68376 1.0192,1.81349 2.1264,3.69234 3.6024,5.16834 3.6855,5.9625 7.4833,11.99484 11.0226,18.00908 2.5357,5.04001 5.022,10.16767 7.4632,15.25041 1.9305,4.96122 3.9219,10.25106 5.6229,15.09081 0.1328,1.22175 0.3666,2.48625 0.9134,3.6 1.5367,7.03125 2.7294,14.21784 2.2479,21.44709 -1.3568,8.79075 -3.0309,17.67348 -3.6474,26.57673 -0.2363,0.53325 -0.5489,1.45134 0.1149,1.78209 3.5932,2.67075 8.5813,1.53693 12.2758,-0.30132 l 0.1621,-0.0207 c 5.2425,-2.07 10.0846,-5.44509 14.1571,-9.24534 5.2065,-4.21425 10.17,-9.37107 13.0837,-15.48882 3.6653,-7.01775 4.7654,-15.52068 6.9929,-23.19993 0.378,-3.37725 -1.4332,0.80559 -2.0475,1.59534 -0.3555,0.333 -0.7853,0.64575 -0.8753,1.15875 -3.897,4.45275 -9.6435,6.4125 -14.5192,9.55125 -0.8753,1.79775 -1.2983,3.8025 -1.9575,5.6925 -3.3008,7.7625 -6.2483,17.72109 -15.0345,20.71584 7.7377,-10.512 14.146,-24.30675 8.8495,-37.38375 -1.4423,-4.52475 -3.1929,-9.07641 -5.4946,-13.21416 -4.4798,-9.60071 -9.9227,-18.9564 -15.9437,-27.65039 -1.5457,-2.85975 -3.476,-5.53725 -5.3705,-8.1495 -7.1685,-10.818 -16.0607,-20.5245 -25.5107,-29.37375 -3.0818,-2.98269 -6.5095,-7.60059 -11.1825,-7.64902 z m -6.6397,5.33466 c -1.0477,-0.0279 -2.1434,0.15552 -3.1366,0.32976 -9.0562,1.72125 -17.6173,5.53734 -25.4226,10.37708 -9.4905,5.7555 -18.4254,13.31317 -29.5224,15.70042 -4.3875,1.27799 -8.9909,1.52108 -13.5134,1.96659 -3.9308,-0.0585 -7.8613,0.009 -11.7921,-0.0315 -5.2515,-0.108 -10.4423,-1.10466 -15.6983,-1.09791 -11.8936,0.33749 -23.848,5.10074 -31.99298,13.91625 -9.621,10.38599 -12.93075,25.82105 -9.46125,39.4178 4.4415,17.226 13.6485,32.70816 22.95013,47.70216 3.4357,6.2415 4.4259,13.48875 4.5924,20.51325 -2.2095,5.949 -5.7062,11.47041 -6.9054,17.77716 -0.015,3.6405 2.9971,6.21675 4.3808,9.36 5.283,9.8685 10.8876,19.70559 14.0376,30.50784 2.0048,4.734 0.954,10.98666 5.1413,14.64966 1.3702,1.32075 3.4382,0.32625 5.0357,0.75375 3.2873,3.8295 4.9251,8.76834 7.0288,13.30209 1.242,4.12425 5.5665,7.182 9.8933,6.525 2.0452,-0.648 2.7271,-2.79684 3.6383,-4.50459 3.2648,2.736 7.7783,3.3975 11.8913,2.9475 1.431,-0.333 3.1161,-1.32498 2.4096,-3.05298 -1.2848,-3.879 -5.3549,-5.463 -8.4846,-7.5375 -13.6733,-11.0475 -24.4307,-25.70193 -30.8162,-42.08868 -3.447,-8.76375 -4.0092,-18.7875 -1.2417,-27.79875 9.882,-14.45625 17.4913,-31.00725 18.857,-48.65625 0.8123,-7.99875 -0.999,-15.97032 -3.6315,-23.47632 -2.079,-5.76225 -4.3468,-11.62584 -8.4755,-16.27209 -0.8438,-1.00575 -2.9565,-4.05234 0.09,-3.49209 4.4752,1.566 6.6667,6.34716 9.0675,10.08216 6.255,13.0365 9.596,27.79677 8.1155,42.25077 16.4632,8.0415 33.0235,16.20441 50.6657,21.37041 7.344,1.9125 15.6193,3.82059 22.9408,0.96084 0.153,-2.0835 -0.522,-4.49775 -0.8707,-6.69375 -7.974,0.1665 -15.3854,-3.47643 -21.9284,-7.68618 -14.022,-9.06525 -24.7996,-21.99375 -36.6234,-33.57675 -6.0705,-6.5835 -12.645,-12.73725 -18.4657,-19.53 -0.9653,-2.097 2.0612,-2.15316 3.2537,-1.25541 6.9997,4.437 12.2938,10.96866 18.092,16.78041 13.662,13.9635 26.5455,29.43468 44.1472,38.65293 3.2558,1.98 6.9841,3.35682 10.8653,2.72457 -0.1485,-11.826 -1.3005,-23.63409 -1.6537,-35.45784 0.3352,-8.955 0.8573,-18.41832 5.3258,-26.41257 2.5943,-4.71825 8.0799,-7.84584 13.4934,-6.73659 1.296,0.25875 2.0159,2.43693 0.4791,2.93868 -8.3227,3.79575 -12.3681,13.13073 -13.3379,21.75048 -2.1757,13.41225 1.6311,26.67834 2.1733,40.04334 1.1003,14.59125 3.0872,29.22318 1.9442,43.86618 3.573,6.912 4.9453,14.66082 5.8588,22.32882 -0.117,5.90175 0.216,11.808 -0.086,17.7075 -0.4792,4.4235 -1.4445,9.08343 0.011,13.43493 0.4095,2.67525 3.2244,2.94057 5.3709,2.72457 2.5087,7.70175 2.3826,16.956 7.4901,23.8275 3.546,1.26675 7.2878,1.9755 10.9553,2.86875 l 1.0529,0 c 0.1328,-1.97775 0.1623,-3.97341 0.565,-5.91291 3.1163,0.79875 6.1085,8.34525 9.983,4.24125 1.3635,-6.651 -4.6237,-11.28159 -8.7187,-15.51159 -5.5845,-6.49575 -9.8525,-14.508 -10.6468,-23.148 0,-17.9595 -0.054,-35.92359 0.029,-53.88534 0.8078,-13.347 9.0046,-24.35166 14.1909,-36.22716 4.4415,-7.524 3.7529,-16.614 3.7416,-24.99075 -0.2362,-12.5145 -3.735,-24.73416 -8.9887,-36.02466 -5.1885,-12.07797 -11.3647,-23.6994 -17.6242,-35.24865 -5.292,-9.05625 -10.2085,-18.50391 -17.2374,-26.36541 -0.8682,-1.20618 -2.136,-1.5921 -3.483,-1.6281 z m -151.07206,0.23832 c -0.78075,-0.009 -1.60416,0.33813 -2.04714,1.11519 -6.01875,6.714 -10.46484,15.15168 -11.46835,24.20118 l 0,2.93625 c 0.59626,5.6925 2.29042,11.37357 5.55967,16.11882 2.69325,4.26375 6.62418,8.46234 11.78118,9.43209 1.03275,0.16875 2.06307,0.40293 3.10707,0.50868 1.09125,-4.77675 3.69018,-8.95734 6.15168,-13.12209 0.93825,-1.24875 1.85607,-2.50641 2.69757,-3.82041 0.441,-0.5895 0.89352,-1.18134 1.24452,-1.82709 -4.93875,-1.4535 -9.69552,-3.81591 -13.23702,-7.63416 -6.021,-7.065 -5.07807,-17.03259 -2.20257,-25.22709 0.89721,-1.65933 -0.2853,-2.66589 -1.58661,-2.68137 z m 77.37546,125.49515 c -1.1655,14.3595 1.3096,29.22525 -1.3567,43.4475 -0.5377,1.33875 -0.9133,2.8665 -0.7175,4.2975 3.393,5.91075 6.1558,12.19077 9.7513,17.97327 2.0002,4.57875 4.3022,9.63 5.6387,14.05125 0.8505,3.40425 -0.2297,7.17273 1.5545,10.35423 0.8033,2.33775 3.5618,3.65877 5.9355,3.51702 0.3483,0.0873 0.7687,-0.0891 1.1953,-0.3312 0,0 0,0 0,0 4.7128,-0.79416 5.7876,5.64363 6.0606,9.37827 -0.027,0.2565 -0.011,0.513 0.049,0.77175 -0.5242,6.53175 6.5093,10.20816 12.0443,11.45916 2.5965,0.72 5.9694,1.18134 7.0899,-1.94841 2.1825,-3.83625 4.9161,1.50075 7.0446,2.9025 1.773,2.48175 4.446,-0.504 3.7462,-2.64375 0.126,-1.63575 -0.1011,-3.52125 -1.5141,-4.572 -2.9205,-2.304 -5.4226,-5.10975 -8.3521,-7.38 -7.0403,-7.68375 -15.4171,-14.36625 -21.1366,-23.18625 -0.486,-1.29825 -1.4218,-2.36475 -2.0338,-3.5955 -3.8723,-11.18475 -9.6571,-21.89925 -10.6404,-33.9075 -0.612,-4.6485 0.241,-9.30807 0.6437,-13.90707 1.2578,-5.13225 2.5086,-10.323 4.5133,-15.24375 0.1958,-0.70875 0.7649,-2.00934 -0.1778,-2.35584 -6.4328,-3.0555 -12.9285,-5.98518 -19.3388,-9.08118 z m 137.8845,5.40909 c -3.5347,1.20825 -7.0355,2.65491 -10.5387,3.88341 -3.1523,0.693 -6.2935,1.68534 -9.5583,1.79334 -1.503,5.922 -3.1318,11.853 -4.3626,17.83125 -1.7392,5.01525 -2.4594,10.41291 -4.5204,15.29541 -0.099,4.896 0.6413,9.76518 1.1296,14.62743 0.2745,4.8375 0.8459,9.67725 1.3184,14.49 0.4928,4.11975 0.1643,8.28 0.2633,12.42 0.1642,3.71025 -2.2228,7.56675 -0.335,11.12625 1.098,2.484 4.1645,0.045 5.7687,1.70091 2.8193,3.9735 1.9643,9.5715 4.7543,13.49325 l 0.01,0.16668 c 2.3085,5.38425 5.1615,11.259 10.2375,14.50125 0.8527,0.92025 2.1891,1.14957 3.3704,1.36332 3.4762,1.134 4.3988,-5.634 7.9403,-3.645 1.143,2.1195 5.4338,3.81843 6.5475,0.70668 1.2803,-5.4765 -3.7844,-10.12509 -7.7354,-13.03209 -11.295,-8.0775 -16.2023,-21.87684 -17.5546,-35.20584 -0.4185,-4.64175 -0.477,-9.29682 -0.6525,-13.95207 0.2948,-7.44975 1.1498,-15.03459 2.7496,-22.39209 1.899,-6.95025 4.5179,-13.75641 6.4642,-20.65041 1.8562,-4.725 3.2085,-9.67068 4.7092,-14.52168 z"
                 inkscape:connector-curvature="0"
                 style="opacity:0.7" />
            </g>
          </g>
        </svg>
        `
        
    },
    "Taurus": {
        "Aries": [37, `<h3>When Aries and Taurus come together in a love affair, the partnership is a natural union of Love, represented by Taurus, and Passion, represented by Aries.</h3>
        <p>This relationship is all about balance. Aries wants to jump right in and get into it, while Taurus prefers to go much more slowly. This can create a problem; Taurus loves to be wooed and romanced — two concepts that are basically foreign to straightforward, brash, totally unsubtle Aries. An Aries-Taurus partnership can be a great learning experience for both Signs. Taurus can help Aries rein in some of the more foolish, impractical impulses, and Aries can help Taurus be more spontaneous and adventurous.</p>`],
        "Taurus": [66, `<h3>When two Taureans come together in a love affair, it’s a very sensuous and stable relationship — which pleases both of them to no end.<h3>
        <p>Those are two of the things a Taurus prizes most in a relationship (along with fidelity, sharing good food and other creature comforts …) When two people both of this Sign get together, it can be the love connection of a lifetime. They will spoil one another to both their hearts’ content: Taurus can respect their sweetheart’s desire for life’s little luxuries, because they have that need themselves. Both partners are charming, graceful and dignified. They can be quite stubborn and opinionated, not to mention jealous and possessive. All Tauruses have to learn to agree to disagree, and especially two Tauruses together; they need to recognize that their relationship is too good to jeopardize with minor arguments.</p>`],
        "Gemini": [32, `<h3>When Taurus and Gemini come together in a love affair, they must both take the time to learn what the dynamics of the relationship are and how they can best get along.</h3>
        <p>They both have much to offer one another and much to learn in this relationship, but it will take a bit of adjustment and effort on both sides. Gemini’s Symbol is the Twins; this Sign can often be of two minds about things. If possessive Taurus is able to let go and give one Twin the relationship security and intimacy it wants while allowing the other Twin its freedom, things will go well between these two. Taurus may want too much for Gemini’s taste early in the relationship, but Gemini can become dependable and steady — Taurus must simply be patient.</p>`],
        "Cancer": [98, `<h3>When Taurus and Cancer come together in a love affair, it’s usually a very good combination.</h3>
        <p>They are two positions apart within the Zodiac, and such Signs tend to share karmic ties and a deep mutual understanding. These particular two Signs have much in common: Both prize security in a love relationship above almost all else; both tend to be nurturers (Cancer is emotionally nurturing while Taurus loves to spoil their lover with sensual delights, gifts and good, rich meals). They’re both quite domestic and love a quiet night spent at home with their sweetie.</p>`],
        "Leo": [72, `<h3>When Taurus and Leo come together in a love affair, they can be a great couple because they know how to stroke one another’s egos and love to have their own stroked! They have similar needs: Taurus needs plenty of affection, to be loved and cherished, while Leo likes compliments and wants to be adored and admired.</h3>
        <p>They’re both extremely loyal and possessive lovers. Since they have such similar desires, they can generally provide for one another’s needs quite well.</p>`],
        "Virgo": [91, `<h3>When Taurus and Virgo come together in a love affair, it’s a union of innate practicality.</h3>
        <p>Both of these Signs employ practicality in their daily lives as the most efficient means to most problems. They can be quite sincere and devoted to one another; as people, both have a great deal of integrity. Virgo likes Taurus’s strength and dedication while Taurus appreciates Virgo’s quick mind.</p>`],
        "Libra": [67, `<h3>When Taurus and Libra come together in a love affair, it can be the unification of two halves of a whole.</h3>
        <p>These two Signs are thought of as being karmically linked. They’re both looking for security in a relationship and they share a love of art, poetry and culture. This relationship may start slowly as, on the surface, they might have few common interests. However, once they understand one another they may learn they have much more in common than was first apparent.</p>`],
        "Scorpio": [89, `<h3>When Taurus and Scorpio come together in a love affair, their union is nothing if not intense, whether that’s in a positive or a negative way.</h3>
        <p>They are opposite Signs in the Zodiac, giving them a special, complex connection. They can combine to make a whole, each partner’s strengths balancing the other’s weaknesses. Their sexual attraction is likely to be off the charts! Taurus and Scorpio have tons in common, but because their personalities are so powerful, they often swing between passionate love and passionate disagreement!.</p>`],
        "Sagittarius": [32, `<h3>When Taurus and Sagittarius come together in a love affair, their connection can be incredibly passionate and steamy, but they must give themselves time to learn about the particular energy this relationship generates.</h3>
        <p>They both have much to gain from their union! While Sagittarius thrives when they’re constantly experiencing new people, places, foods and more, Taurus can be quite content with routine as it affords them the security they so prize. Early in the relationship, Taurus might tend to demand more commitment and stability than Sagittarius is ready to give, but if Taurus can learn to be patient, Sagittarius can definitely come to appreciate the comforts of hearth and home.</p>`],
        "Capricorn": [98, `<h3>When Taurus and Capricorn come together in a love match, it’s a practical, sensible partnership.</h3>
        <p>These two Signs share a certain down-to-earth logic and interest in efficiency. Taurus is not interested in risking more than is necessary in terms of emotional connection and involvement, and Capricorn is similarly disinterested in risk, but more in terms of money and career. Capricorn’s career is one of the great focuses of their lives; they’re interested in scaling the heights and tend to set very high standards for themselves to adhere to. Taurus has high standards as well, but regarding love, relationships and possessions.</p>`],
        "Aquarius": [57, `<h3>When Taurus and Aquarius come together, they can move mountains — if they can figure out how to coordinate their efforts.</h3>
        <p>Taurus’s practical, down-to-earth approach to life is about as opposite as can be to Aquarius’s unconventional, out-of-this-world approach to just about everything! Taurus resists change and Aquarius is the most progressive of all 12 Signs of the Zodiac. How do these two get along, then. They may appear to have few common interests, but they share a very strong desire to succeed — which means they may make better business partners than lovers.</p>`],
        "Pisces": [84, `<h3>When Taurus and Pisces come together in a love affair, it’s generally a happy union.</h3>
        <p>They are two positions apart within the Zodiac, and such Signs tend to have karmic ties and a deep empathy for one another. While Pisces is idealistic, dreamy and impressionistic, Taurus is more down-to-earth and practical. They’re both nurturers, however, and both prize harmony and stability in a relationship.</p>`],
        "svg": `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
        <!-- Created with Inkscape (http://www.inkscape.org/) -->
        
        <svg
           xmlns:dc="http://purl.org/dc/elements/1.1/"
           xmlns:cc="http://creativecommons.org/ns#"
           xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
           xmlns:svg="http://www.w3.org/2000/svg"
           xmlns="http://www.w3.org/2000/svg"
           xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
           xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
           width="50.85568mm"
           height="50.85568mm"
           viewBox="0 0 718.77997 718.77998"
           id="svg2"
           version="1.1"
           inkscape:version="0.91 r13725"
           sodipodi:docname="TaurusDrawing5.svg">
          <defs
             id="defs4">
            <filter
               inkscape:label="Modified combined Lighting"
               inkscape:menu="Bevels"
               inkscape:menu-tooltip="Basic specular bevel to use for building textures"
               style="color-interpolation-filters:sRGB"
               id="filter125483"
               height="1.04"
               width="1.04"
               y="-0.02"
               x="-0.02">
              <feGaussianBlur
                 stdDeviation="6"
                 in="SourceGraphic"
                 result="result0"
                 id="feGaussianBlur125485" />
              <feDiffuseLighting
                 lighting-color="#ffffff"
                 diffuseConstant="1"
                 surfaceScale="4"
                 result="result5"
                 id="feDiffuseLighting125487">
                <feDistantLight
                   elevation="45"
                   azimuth="235"
                   id="feDistantLight125489" />
              </feDiffuseLighting>
              <feComposite
                 k1="1.4"
                 in2="SourceGraphic"
                 in="result5"
                 result="fbSourceGraphic"
                 operator="arithmetic"
                 id="feComposite125491"
                 k2="0"
                 k3="0"
                 k4="0" />
              <feGaussianBlur
                 result="result0"
                 in="fbSourceGraphic"
                 stdDeviation="6"
                 id="feGaussianBlur125493" />
              <feSpecularLighting
                 specularExponent="25"
                 specularConstant="1"
                 surfaceScale="4"
                 lighting-color="#ffffff"
                 result="result1"
                 in="result0"
                 id="feSpecularLighting125495">
                <feDistantLight
                   azimuth="235"
                   elevation="45"
                   id="feDistantLight125497" />
              </feSpecularLighting>
              <feComposite
                 k3="1"
                 k2="1"
                 operator="arithmetic"
                 in="fbSourceGraphic"
                 in2="result1"
                 result="result4"
                 id="feComposite125499"
                 k1="0"
                 k4="0" />
              <feComposite
                 operator="in"
                 result="fbSourceGraphic"
                 in2="SourceGraphic"
                 in="result4"
                 id="feComposite125501" />
              <feColorMatrix
                 result="fbSourceGraphicAlpha"
                 in="fbSourceGraphic"
                 values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
                 id="feColorMatrix125639" />
              <feGaussianBlur
                 id="feGaussianBlur125641"
                 stdDeviation="1.1000000000000001 1.1299999999999999"
                 result="blur"
                 in="fbSourceGraphic" />
              <feColorMatrix
                 id="feColorMatrix125643"
                 values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 50 0 "
                 result="colormatrix" />
              <feComposite
                 id="feComposite125645"
                 in2="fbSourceGraphic"
                 in="colormatrix"
                 operator="in" />
            </filter>
            <filter
               inkscape:collect="always"
               style="color-interpolation-filters:sRGB"
               id="filter126673"
               x="-0.099003308"
               width="1.1980066"
               y="-0.099003308"
               height="1.1980066">
              <feGaussianBlur
                 inkscape:collect="always"
                 stdDeviation="2.4750002"
                 id="feGaussianBlur126675" />
            </filter>
          </defs>
          <sodipodi:namedview
             id="base"
             pagecolor="#ffffff"
             bordercolor="#666666"
             borderopacity="1.0"
             inkscape:pageopacity="0.0"
             inkscape:pageshadow="2"
             inkscape:zoom="0.7359693"
             inkscape:cx="359.38999"
             inkscape:cy="359.38999"
             inkscape:document-units="px"
             inkscape:current-layer="layer1"
             showgrid="false"
             inkscape:window-width="1366"
             inkscape:window-height="705"
             inkscape:window-x="-8"
             inkscape:window-y="-8"
             inkscape:window-maximized="1"
             fit-margin-top="0"
             fit-margin-left="0"
             fit-margin-right="0"
             fit-margin-bottom="0" />
          <metadata
             id="metadata7">
            <rdf:RDF>
              <cc:Work
                 rdf:about="">
                <dc:format>image/svg+xml</dc:format>
                <dc:type
                   rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
                <dc:title></dc:title>
              </cc:Work>
            </rdf:RDF>
          </metadata>
          <g
             inkscape:label="Layer 1"
             inkscape:groupmode="layer"
             id="layer1"
             transform="translate(-20.79896,980.98172)">
            <g
               id="g91385">
              <circle
                 transform="matrix(10,0,0,10,-3421.7007,-4530.6759)"
                 id="circle124460-9"
                 r="29.998999"
                 cy="390.90842"
                 cx="380.18896"
                 style="fill:#000000;fill-opacity:1;stroke:none;stroke-opacity:1;filter:url(#filter126673)" />
              <circle
                 transform="matrix(10,0,0,10,-3421.7007,-4530.6759)"
                 id="circle124460"
                 r="29.998999"
                 cy="388.90842"
                 cx="378.189"
                 style="fill:#f75500;fill-opacity:1;stroke:none;stroke-opacity:1;filter:url(#filter125483)" />
              <path
                 style="opacity:0.7"
                 id="path4"
                 d="m 271.0646,-818.16861 c -6.5575,2.365 -12.49507,6.54234 -17.21757,11.63984 -5.26,5.425 -8.95735,12.65774 -9.66485,20.24024 -0.705,4.2625 -0.6825,8.6575 -0.0875,12.925 1.2025,7.175 6.70969,12.05008 11.46719,17.01758 3.7225,6.3225 -0.75469,14.14718 -7.37969,15.92968 -5.3,1.8425 -10.98781,2.65274 -16.00781,5.22774 -4.815,1.665 -9.61484,3.45742 -14.28984,5.48242 -6.1075,2.5625 -12.28016,5.23266 -17.73516,9.01015 -4.045,2.4325 -7.73984,5.46492 -11.06485,8.80742 -3.9725,3.355 -7.18984,7.64 -9.72734,12.1625 -4.865,7.6225 -6.59266,16.76484 -7.18516,25.66484 l 0,2.31992 c 0.2625,3.5425 0.40494,7.1375 1.45744,10.5625 0.815,3.5075 1.79022,7.11016 3.55272,10.26016 2.1575,5.155 4.8772,10.39242 9.2672,13.98242 1.88,1.9675 6.36772,0.79516 5.97772,-2.23984 -0.0225,-3.1825 -3.00772,-5.14516 -4.90272,-7.36016 -6.5625,-8.23 -7.91,-19.28726 -7.3875,-29.49726 0.515,-9.4025 4.56272,-18.28774 10.32772,-25.61524 3.985,-4.6075 8.61727,-8.595 13.48477,-12.225 1.5175,-0.975 3.07508,-1.89508 4.49258,-3.01758 5.6,-3.2125 11.54242,-5.73999 17.56992,-8.01249 4.3125,-1.3525 8.62531,-2.69734 12.95781,-3.97734 6.445,-2.3025 13.93227,-2.27766 19.69727,-5.99766 0.0675,-0.06 0.20008,-0.18218 0.26758,-0.24218 3.45,-2.485 6.19265,-5.93508 8.03515,-9.75508 2.575,-4.63 4.49485,-9.7225 5.25235,-14.9875 0.72,-4.5125 0.755,-9.41766 -1.2625,-13.61016 -1.8925,-6.08 -5.5125,-11.58484 -6.775,-17.91484 -0.8675,-7.82 1.13007,-16.50766 7.69257,-21.53516 l 0.30977,-0.2 c 1.765,-0.7175 3.555,-3.62992 1.575,-5.04492 l -2.69727,0 z m 97.34999,26.26718 c -6.01541,0.006 -12.06506,0.62742 -17.81756,2.40274 -8.1375,2.815 -14.87008,8.4225 -21.43008,13.825 -12.5125,10.7825 -23.74735,22.9425 -34.85235,35.15 -9.015,10.925 -20.50507,19.56741 -32.85507,26.39491 -9.77,4.8075 -19.12,10.44782 -28,16.74532 -14.6225,12.7825 -26.725,28.985 -32.6,47.65 -5.4425,17.815 -4.95735,37.1475 0.13515,54.9875 2.5525,9.7525 9.7175,17.75734 18.825,21.92734 6.505,3.09 11.02735,10.77266 8.31485,17.84766 -1.545,1.665 -4.74493,2.28468 -4.88243,5.00468 12.9475,16.8775 26.38477,33.45024 38.67227,50.84024 0.4525,1.2875 1.6625,0.53476 2.375,0.0848 3.4625,-1.6775 7.47773,-2.745 11.06523,-3.3375 -9.8425,-12.0375 -20.7625,-24.09242 -26.725,-38.75742 -3.16,-6.9725 -0.76,-14.88508 2.925,-21.14258 4.97,-8.4775 8.15477,-17.85992 10.33477,-27.40742 4.9325,-19.075 7.80016,-39.50758 2.62266,-58.83008 -1.6625,-5.29 -3.405,-10.58992 -5.6125,-15.66992 0.2775,-1.555 2.81007,-1.07226 3.43007,0.10274 9.5325,13.275 13.96227,29.5825 15.22227,45.7125 10.035,3.4725 19.06531,9.35468 27.17031,16.14218 5.1175,4.395 10.145,9.14266 16.45,11.79766 7.4975,3.695 17.16742,4.00484 24.00742,-1.23516 -14.1525,-17.1875 -27.29773,-38.01734 -25.77773,-61.22734 0.365,-8.0375 1.64758,-17.32508 8.46758,-22.58008 -2.9125,-21.865 -0.36985,-44.95726 9.66015,-64.82225 0.835,-1.7275 2.12977,-3.22274 3.62227,-4.40274 0.9575,0.6375 0.77008,1.93774 0.34258,2.85274 -5.26,13.3375 -7.92258,27.72491 -7.68008,42.03241 0.775,6.7175 1.01,13.48734 1.3375,20.22734 -1.635,3.7375 -4.81992,6.62274 -6.09492,10.56524 -6.5825,14.77 -3.09242,31.585 2.68008,46.025 4.32,11.4325 10.02007,23.1675 19.93007,30.825 11.2425,6.01 23.84977,9.6925 33.78477,17.9625 6.39,6.4675 6.35532,16.39468 5.82032,24.85468 -1.2125,11.1625 -10.2975,20.22266 -20.86252,23.14766 -4.31249,4.37 -1.99022,15.15758 5.44728,14.04258 4.7575,-0.3575 8.20524,-4.35742 10.97774,-7.83242 7.6075,-10.225 16.08726,-19.76024 24.09726,-29.65274 2.92,-4.155 7.52266,-9.0775 4.74766,-14.5 -10.49,-14.645 -26.32,-26.57992 -30.7625,-44.78242 0.14,-10.965 2.47726,-24.2025 -6.19024,-32.8 -0.46,-1.4 -4.56484,-2.49984 -2.70234,-3.90234 3.185,-0.5 5.30008,2.37 7.10508,4.5 4.63,5.1675 7.79984,11.695 8.66484,18.6 0.4125,6.86 0.065,13.6025 0.125,20.4625 2.38,2.5275 5.78266,3.73968 8.43516,5.95468 5.2975,4.4425 12.99726,-1.075 14.14726,-6.9625 1.79,-8.7325 4.46032,-17.27734 7.60782,-25.57734 1.125,-2.94 3.78234,-5.90008 4.56484,-8.44258 -0.4125,-1.16 -1.02742,-2.76 -1.99492,-3.3 -11.58,5.6225 -13.98508,19.16524 -18.93008,29.79024 -2.235,3.3025 -1.98758,-1.58274 -1.89258,-3.17774 0.345,-10.0475 0.43008,-20.45226 -2.99492,-30.08476 -6.7025,-14.475 -18.335,-26.13516 -24.125,-41.12266 -2.6575,-6.3525 -4.63244,-13.34008 -3.80742,-20.20508 0.21,-7.9975 0.90008,-16.94976 6.45508,-23.24725 5.0125,-4.5075 12.35734,-2.6975 17.85234,-0.05 11.37,5.7925 20.51266,15.05483 29.23516,24.07733 4.3225,-3.3775 -1.70508,-10.09984 1.19492,-14.02734 10.145,-2.18 19.60758,4.52218 27.24258,10.22968 0.005,-7.425 1.37992,-14.92217 3.05742,-22.05467 -17.4125,-19.1925 -37.49508,-35.99016 -58.88008,-50.57266 -7.97,-5.2725 -16.57734,-11.05992 -26.52734,-10.96992 -1.38048,-0.0577 -2.76692,-0.0892 -4.1551,-0.0879 z m 114.7551,40.98048 c -3.605,2.4475 -7.33008,5.06976 -10.24258,8.24726 -9.195,8.1075 -14.52508,21.25241 -11.96758,33.46991 0.935,5.22 1.49016,11.76508 5.43516,15.55508 0.77,1.2125 2.71476,0.90742 3.97226,0.98242 6.935,0.295 12.8075,-4.84484 15.7625,-10.71484 -0.6775,-0.585 -1.43758,-1.06242 -2.18008,-1.54492 -1.5075,-1.5825 -2.88726,-3.30242 -4.50976,-4.76992 -3.875,-5.855 -6.14242,-13.09999 -4.14492,-20.11249 0.98,-7 5.99226,-12.15282 9.13476,-18.18282 0.8025,-1.195 -0.25726,-2.38468 -1.25976,-2.92968 z m -89.75664,30.16365 c -2.15798,-0.003 -4.30868,0.36142 -6.3836,1.19884 -6.4125,3.4425 -6.77484,11.89984 -6.18984,18.22734 0.0725,6.3625 3.13484,12.1625 6.35234,17.4 1.6725,3.7575 3.64516,7.48734 5.71016,11.02734 6.44,12.615 12.91976,25.52266 15.45976,39.56016 1.8975,-3.2725 5.01024,-5.695 7.51524,-8.3375 0.06,-0.0675 0.18008,-0.20008 0.24258,-0.26758 2.4225,-1.7475 4.78468,-3.9125 6.80468,-6.0375 -1.4275,-10.335 -2.00476,-21.49492 3.26524,-30.91992 2.78,-4.035 6.29476,-7.74758 10.69726,-10.04258 -1.435,-2.33 -3.49484,-4.32984 -5.46484,-6.22734 -2.54,-3.57 -6.01758,-6.54242 -9.19258,-9.54492 -3.965,-4.01 -8.42976,-7.76032 -13.25976,-10.58282 -4.47782,-3.03852 -10.0418,-5.44552 -15.55664,-5.45352 z m 45.30508,9.0797 c -1.38216,-0.0136 -2.71954,0.36522 -3.74844,1.35664 -1.71,3.3225 -0.24516,7.13492 1.51484,10.09492 4.4125,7.005 10.69492,12.815 17.21992,17.7875 2.3125,2.34 5.48024,4.02 8.59024,5.1625 2.31,1.0175 6.26476,-0.0875 5.80976,-3.1375 0.7475,-1.5075 -0.12476,-3.38024 -0.63476,-4.79024 -2.495,-7.1425 -8.235,-12.54468 -13.5,-17.76718 -3.265,-2.8975 -6.61274,-5.95008 -10.76524,-7.46758 -1.29624,-0.70392 -2.91988,-1.22358 -4.48632,-1.23906 z m 112.54686,11.07148 c -0.6685,0.0118 -1.26124,0.3825 -1.4078,1.24766 0.0124,0.9525 0.15726,1.90218 0.25976,2.85468 0.77,7.0925 -0.37476,15.04282 -6.20976,19.83282 -1.1525,1.0075 -2.6,1.555 -3.8,2.475 -4.44,2.185 -9.45258,3.22242 -14.39258,2.83242 -0.54,0.9825 -0.76742,2.0825 -1.06992,3.15 -1.34,4.7375 -1.24766,12.06508 4.01484,14.35508 8.5,0.605 18.35242,0.54726 25.15742,-5.41524 3.795,-3.3575 5.19258,-8.46742 5.85508,-13.30742 l 0,-6.68516 c -0.055,-0.46 -0.15992,-0.90992 -0.25742,-1.35742 -0.5175,-6.495 -2.30516,-13.11984 -5.98516,-18.53984 -0.32062,-0.88032 -1.30494,-1.45784 -2.16446,-1.44258 z m -60.10546,1.22968 c -0.2698,0 -0.53882,0.005 -0.80742,0.0128 -1.0275,0.885 -1.97516,2.02228 -2.62266,3.22228 -1.4125,0.9525 -2.5575,2.59014 -3.525,3.99764 -2.74,2.7475 -5.64984,5.32266 -9.11484,7.19766 -0.8425,4.2875 1.06476,10.19226 -2.49024,13.73477 -5.24,2.735 -11.755,1.08992 -16.675,-1.69258 -4.865,-2.79999 -8.8725,-6.83999 -12.475,-11.08749 -6.0325,-0.6375 -12.13734,3.89756 -13.52734,9.86756 -3.88,10.53751 -2.79008,23.63243 1.75742,34.19493 1.5725,3.8875 5.94,7.05032 6.025,11.28282 -0.6425,5.055 -0.3975,10.59977 0.125,15.79727 0.335,3.955 3.83266,7.38758 7.88516,7.19258 8.95,0.5675 15.91758,-5.825 23.96758,-8.5125 4.045,0.8975 3.05,8.48 7.2125,8.2875 3.055,-0.525 3.6525,-4.47742 4.4125,-6.90742 0.5025,-4.5375 3.50468,-8.04001 6.31718,-11.37501 2.4025,-1.97 4.51282,-4.525 6.75782,-6.4875 3.135,-2.51 6.23234,-5.26024 10.15234,-6.46524 0.3625,-1.9225 0.30508,-4.27476 -0.50742,-6.12226 -2.6475,-3.5475 -8.14742,0.54226 -10.81992,-2.97774 -2.0625,-2.3125 -4.08758,-6.59968 -7.88008,-5.54218 -3.1725,0.4975 -5.61274,-1.97024 -7.72774,-3.84024 -0.2475,-1.65 -1.29484,-4.79992 1.27266,-4.81992 1.71,1.1625 2.45508,3.56016 4.49258,4.41016 2.9325,0.235 5.87976,0.5075 8.70976,1.375 2.245,2.265 4.39516,6.03234 8.16016,4.91484 3.7275,-0.6475 8.07516,0.61234 8.94766,4.77734 8.7725,-4.3675 13.12476,-14.67234 12.24726,-24.15234 -0.4,-11.16751 -7.08758,-22.31493 -17.35508,-26.96993 -0.135,-0.4425 -0.74742,-0.49 -1.13242,-0.6125 -3.57656,-1.83046 -7.7355,-2.70532 -11.78242,-2.70038 z m -28.65234,41.89024 c 0.5775,4.035 1.55718,7.99274 2.86718,11.85274 0.5975,2.635 3.09516,5.4925 0.89766,8.0375 -2.73,1.81 -6.95258,1.13492 -8.91758,-1.53008 -1.4625,-2.9025 -1.63258,-6.28266 -1.11758,-9.44766 0.45,-3.6825 2.38782,-8.1225 6.27032,-8.9125 z m 61.45742,4.83242 c -1.4,5.6 -5.34766,10.43024 -10.53516,13.01524 2.855,1.8175 6.01508,3.66492 8.96758,5.49492 3.8575,2.9525 7.68492,5.98508 11.30742,9.24258 2.1,1.11 3.84258,-1.04742 4.06758,-2.95742 0.38,-5.0775 0.002,-10.82016 -2.69766,-15.22266 -1.955,-4.585 -6.54726,-7.88266 -11.10976,-9.57266 z m -304.03008,31.74766 c 3.4725,12.8975 11.16,24.81516 20.0875,34.88516 8.9075,9.1 4.03742,24.72984 -4.84258,31.82734 0.98,-7.0575 2.1075,-14.29 0.6625,-21.3625 -2.275,-7.305 -7.61227,-13.00758 -11.75977,-19.26758 -6.21,-7.1075 -5.48765,-17.38242 -4.14765,-26.08242 z m 205.80196,2.19219 c -0.74758,-0.0638 -1.16008,0.88453 -1.07696,1.59765 0.2025,4.8875 -0.5325,9.77782 -1.95,14.44532 -0.6825,1.91 -2.08266,3.43742 -2.96016,5.21992 -3.0925,3.245 -7.10234,5.37008 -11.32734,6.78008 2.545,3.01 5.115,6.06218 8.0125,8.74218 2.2925,2.9025 5.145,5.41032 8.025,7.72032 3.895,3.87 8.3225,7.3625 11.2875,12.0875 5.0825,7.76 0.39258,16.46992 -2.00742,24.18242 -2.805,4.57 -7.44008,7.56742 -11.86758,10.46992 -2.695,1.7875 -5.0175,4.89484 -3.9875,8.31484 0.3125,6.2425 9.21758,8.23766 13.50508,5.19766 2.355,-0.99 3.54984,-3.58742 4.78984,-5.70742 4.705,-9.6725 8.24516,-19.92766 13.74766,-29.19766 2.505,-3.6725 4.60976,-7.74258 6.08476,-11.96758 1.04,-4.43 0.0477,-10.06968 -3.89726,-12.76718 -8.16,-9.09 -16.48258,-18.53758 -20.81758,-30.20508 -1.2425,-5.085 -3.27492,-9.96242 -5.21992,-14.81992 -0.12,-0.0541 -0.23382,-0.0839 -0.34062,-0.093 z m -148.60079,6.41445 c -0.25447,0.002 -0.50899,0.0158 -0.76367,0.041 -0.5975,7.5575 -2.70766,15.06726 -4.64766,22.42226 l -0.0473,0.19766 c -1.355,2.825 -2.38,6.3375 -3.5375,9.4375 1.515,-0.855 3.2125,-1.63008 4.5,-2.76758 2.535,-0.8975 5.01985,-1.96484 7.51485,-2.95234 5.1975,-1.4725 10.59515,-2.33508 15.83515,-3.04258 0.1,0.0176 0.29743,0.0473 0.39493,0.0648 4.605,-0.53 9.71242,-0.34258 13.99492,-0.69258 -1.845,-1.78 -4.01985,-3.92742 -6.31485,-5.26992 -4.5125,-4.6025 -9.8125,-9.12258 -15.425,-12.53008 -0.05,-0.38 -0.41,-0.44726 -0.7125,-0.53476 -3.19921,-1.9711 -6.97434,-4.40818 -10.7914,-4.37344 z m 192.18125,5.9832 c -2.22,1.1025 -4.77,1.88532 -6.9125,2.84532 -3.45,0.7775 -6.97,1.98476 -10.55,1.38476 -3.11,-0.105 -6.2725,-1.69984 -9.325,-0.58984 -1.9575,1.2225 -1.28226,3.66 -0.83476,5.475 1.6175,4.46 4.62968,8.59992 8.75468,10.99492 2.42,1.735 5.73782,1.50992 8.59532,1.94492 5.3375,0.135 12.00484,-0.2975 15.21484,-5.3125 1,-2.1725 0.83016,-4.76742 0.37266,-7.04492 -0.1,-3.5625 -0.62524,-9.74766 -5.31524,-9.69766 z m -172.70899,24.10508 c -2.86916,-0.0174 -5.73132,0.11704 -8.54101,0.7625 -4.1625,0.635 -8.4375,2.31 -11.3625,5.425 -0.6925,6.855 -1.2125,13.81508 -3.175,20.46758 -0.915,3.4025 -2.37758,7.01016 -1.26758,10.54766 1.235,3.46 5.12273,4.5275 7.34023,7.1625 6.61,7.675 13.02235,15.51468 19.33985,23.42968 3.5875,-3.81 9.25492,-4.75718 14.24492,-3.97968 -3.3875,-2.7425 -6.8025,-5.73 -10.25,-8.25 -4.2775,-4.2175 -8.81492,-8.42766 -12.75742,-13.03516 -3.11,-4.5325 -6.75492,-9.77 -5.15742,-15.6125 2.185,-7.6575 9.20742,-12.2425 13.38242,-18.6375 0.2501,-0.16526 0.43638,-0.37746 0.57929,-0.61406 1.93381,-2.15258 3.27196,-4.8366 4.31094,-7.51836 -2.21922,-0.0284 -4.45515,-0.13408 -6.68672,-0.14766 z m 63.97657,51.61368 c -0.2587,0.006 -0.51719,0.0269 -0.775,0.0641 -5.6675,0.9725 -11.62743,2.215 -16.39493,5.6 -1.745,0.97 -3.17507,4.93976 -0.38007,5.44726 2.875,0.12 6.39234,-4.15742 8.83984,-1.01992 -0.9275,3.5 -5.58742,5.82992 -5.21992,10.05742 -0.605,3.26 3.75008,4.79508 6.03008,3.03008 4.06,-2.65 8.0625,-5.57242 11.4625,-9.03242 0.6525,-4.265 0.035,-8.84274 1.75,-12.97774 -1.68,-0.55124 -3.50163,-1.21158 -5.3125,-1.16874 z m 52.14882,0.23594 c -4.91566,-0.0273 -9.80578,0.78616 -13.4414,4.52304 -2.2575,0.7 -1.72258,5.30976 0.30742,4.20976 3.7175,-1.535 4.24,3.22008 2.1125,5.53008 -0.845,1.795 -3.9425,3.68242 -2.65,6.00742 3.47,3.8375 10.82508,1.96016 13.36758,-2.08984 0.055,-0.0675 0.16508,-0.205 0.21758,-0.275 3.36,-3.125 1.91508,-8.26234 2.46758,-12.32734 1.0675,-1.26 2.12976,-3.53266 2.49726,-5.34766 -1.59874,-0.11874 -3.23996,-0.22136 -4.87852,-0.23046 z m -101.55273,16.16328 c -2.59053,0.0261 -5.02656,0.95936 -6.53125,3.24218 -2.5525,5.1925 -0.17719,13.15758 5.53281,15.26758 3.505,2.22 8.25719,2.1075 12.30469,1.975 2.615,-0.815 -0.86977,-5.59274 2.46523,-5.92774 3.6425,1.555 6.9075,3.91758 10.5625,5.45508 2.415,0.8625 2.39727,-2.68226 1.44727,-3.42226 -4.3875,-5.9625 -10.79992,-10.68524 -17.50742,-13.82774 -2.20336,-1.65618 -5.33789,-2.79168 -8.27383,-2.7621 z m -34.55625,16.85312 c -1.97764,0.002 -3.99539,0.92984 -5.23242,2.44922 -1.4025,2.98 -0.46508,6.39492 0.74492,9.28242 1.4,5.2075 5.06258,9.39484 10.19258,11.21484 1.7675,0.9375 3.70515,1.47508 5.63515,1.98008 l 0.66485,0 c 5.16,-0.1875 2.23515,-5.03016 0.82265,-7.79766 0.1425,-2.7725 3.09485,-0.55992 4.43985,0.0301 0.7275,0.8475 1.75258,1.34492 2.76758,1.78242 1.8275,1.52 4.13492,2.98016 6.61992,2.68516 1.745,-0.48 1.24008,-3.0175 0.19258,-4 -1.6275,-2.8425 -4.24493,-4.95242 -6.53243,-7.24492 -5.4025,-4.755 -10.72992,-11.09524 -18.74492,-10.20274 l -0.21758,-0.0273 c -0.44203,-0.10266 -0.89635,-0.15182 -1.35273,-0.15156 z"
                 inkscape:connector-curvature="0" />
            </g>
          </g>
        </svg>
        
        `
    },
    "Gemini": {
        "Aries": [84, `<h3>When Aries and Gemini come together in a love affair, they connect on a physical as well as an intellectual level.</h3>
        <p>These two Signs love activity and stay optimistic even in the most trying of times. Signs that are two apart in the Zodiac usually enjoy excellent communication and a deep understanding of one another. Aries’s independent, pioneering spirit is attractive to Gemini, who also values independence. If Gemini feels that Aries is being too controlling or if Aries takes Gemini’s flirtatious nature too seriously, arguments may set the tone of the relationship. They create a good balance together: Aries wants to experience things and Gemini wants to discuss them. Together they can make all kinds of new discoveries that they might have missed alone.</p>`],
        "Taurus": [32, `<h3>When Taurus and Gemini come together in a love affair, they must both take the time to learn what the dynamics of the relationship are and how they can best get along.</h3>
        <p>They both have much to offer one another and much to learn in this relationship, but it will take a bit of adjustment and effort on both sides. Gemini’s Symbol is the Twins; this Sign can often be of two minds about things. If possessive Taurus is able to let go and give one Twin the relationship security and intimacy it wants while allowing the other Twin its freedom, things will go well between these two. Taurus may want too much for Gemini’s taste early in the relationship, but Gemini can become dependable and steady — Taurus must simply be patient.</p>`],
        "Gemini": [61, `<h3>When two Geminis partner off, it really is like four people coming together (Gemini is represented by the Twins).</h3>
        <p>This relationship can never be dull, which is a good thing — these two can get bored easily! Since they have the same need for intellectual stimulation and nearly-constant chatter, they serve very well as one another’s sounding boards off which to bounce new ideas and theories. Gemini is all about freedom and variety of expression, and two Geminis together will enjoy this to the fullest. Others enjoy two Geminis as a couple as well — they’re sure to be the life of every party with their sharp wit and well-honed entertainment routine. If they can avoid competition and cooperate instead, their love relationship can be extremely happy and mutually satisfying.</p>`],
        "Cancer": [66, `<p>When Gemini and Cancer come together in a love affair, it may be a rather curious relationship. Sensitive, emotional Cancer has trouble communicating clearly, but clear communication is what defines Gemini. Gemini’s chivalrous nature and silver tongue may encourage the Crab to come out of its shell more quickly than usual; Cancer, in turn, can teach Gemini to slow down and appreciate the world, which the frenetic Twins hardly ever take time to do. If Gemini seems to ignore Cancer or doesn’t provide them with as much reassurance and intimacy as Cancer needs, trouble may ensue. These two signs approach the world in such different manners that they must be able to understand and accept one another’s differences.
        <br>
        Cancer is the sign of home and hearth, while Gemini is the thinker. Gemini can easily slip into the role of Cancer’s knight in shining armor; Cancer returns that favor with their characteristic urge to protect the ones they love. Quality of home life is important to Cancer, and Gemini will be spoiled by their Cancer lover’s hearty home cooking, soft bed and other creature comforts. Cancer is strongly intuitive and maintains an almost psychic connection with their loved ones but can tend toward possessiveness and idealization of their Gemini partner. If Gemini just reassures Cancer that they’re loved and cherished, all will go smoothly.
        <br>
        Gemini may tend to crave wild and unusual sexual experiences, while Cancer favors a tender embrace from their partner. Their sex life may involve a lot of communication from Gemini to reassure Cancer and build intimacy over time. Cancer may be reluctant at first, but if Gemini is willing to put in the work to make their Cancer feel safe, the two will develop a strong, unbreakable bond.</p>`],
        "Leo": [88, `<h3>When Gemini and Leo come together in a love affair, their relationship is playful and high-spirited, characterized by light activity and optimism.</h3>
        <p>Gemini thrives on mental stimulation and is therefore very attracted to Leo’s creative, dramatic spirit. There can be trouble between these two, however: If Leo takes Gemini’s flirty, outgoing nature too seriously, or if Gemini thinks Leo wants to maintain total control of the relationship, arguments may break out. Though their approaches are different — Gemini likes to analyze things from all sides in an intellectual conversation while Leo would rather not talk about it and just jump right in — they are well-matched.</p>`],
        "Virgo": [67, `<h3>When Gemini and Virgo come together in a love affair, it’s crucial to the survival of the relationship that they take time to learn about one another’s approach to life and love — and remember that both partners’ attitudes are worth understanding! Gemini is symbolized by the Twins; they can see both sides of a story, they tend to vacillate between two courses of action and sometimes they can seem as if they have a split personality! This relationship is greatly strengthened when steady Virgo provides one Twin with a steady emotional anchor while allowing the other Twin to flit about at will.</h3>
        <p>Virgo may be a bit too serious and demanding for Gemini, especially if this occurs early in the relationship before Gemini has fully committed. If Virgo just gives it time, things will smooth out.</p>`],
        "Libra": [94, `<h3>When Gemini and Libra come together in a love affair, they enjoy a great relationship based on intellectual interests and mental agility.</h3>
        <p>Dual-natured Gemini loves Libra’s balance, and Libra is always entertained by the chatty, brainy Twins. Libra loves art and beauty while Gemini loves the beauty of an idea, but these loves aren’t far off from one another.</p>`],
        "Scorpio": [29, `<h3>When Gemini and Scorpio come together in a love affair, they’ll need to learn to understand and accept one another’s differences — and if they can, they will be a nearly unbreakable couple.</h3>
        <p>Where Gemini is adaptable, intellectual, outgoing and chatty, Scorpio tends to be secretive, focused, intense and determined. Gemini tends to take things lightly, including their lover; Scorpio, on the other hand, has a very deep need for emotional connection and intimacy. Scorpio is generally very loyal to their lover and very connected to the relationship.</p>`],
        "Sagittarius": [61, `<h3>When Gemini and Sagittarius come together in a love affair, it can be a truly spectacular match! These two are extremely compatible; any rough spots they encounter during the course of the relationship are sure to be smoothed over with a minimum of effort.</h3>
        <p>Gemini is quite able to provide pioneering, adventurous Sagittarius with the independence Sagittarius requires in a close relationship, because Gemini shares that same need. While Sagittarius needs physical independence, Gemini needs mental freedom, but the need is the same at base. These two both love new experiences, people and sensations, and are sure to have great adventures together. Both have attention spans that love to move quickly from one thing to the next in order to absorb as much experience as possible.</p>`],
        "Capricorn": [66, `<h3>When Gemini and Capricorn come together in a love affair, it may be tough for them to remember why they’re together at all, as the ways in which they approach the world couldn’t be more opposite.</h3>
        <p>If they’re operating from a base of love and mutual respect, they’ll be able to overcome most obstacles, but they must work hard. Gemini must have freedom to think outside the bounds; they rely on their quick wits, humor and intellectual prowess to move through life at a fast pace. Capricorn is concerned with advancement and status; they rely on following the rules and finding set, tried-and-true paths to follow toward success, no matter how long it takes. Gemini likes to cut corners; Capricorn likes to be thorough. These two Signs’ challenge as a couple is to learn to maintain a similar pace so they can arrive at the same place at the same time.</p>`],
        "Aquarius": [84, `<h3>When Gemini and Aquarius come together in a love affair, the pair can enjoy a wonderfully stimulating mental connection.</h3>
        <p>Gemini is in love with ideas, and visionary Aquarius is full of them. Both of these Signs need their independence; they can easily provide this for one another since they understand the need so well. The only trouble that may arise is if Gemini begins to think Aquarius is too stubborn in their thinking, or if Gemini dawdles a bit too much for Aquarius’s fast-paced, forward-moving standards. This type of problem isn’t likely to cause a major disturbance; in general they work very well together and understand one another on a very deep level.</p>`],
        "Pisces": [54, `<h3>When Gemini and Pisces come together in a love affair, they can make a very empathetic and mutually satisfying couple.</h3>
        <p>Gemini is cerebral, quick-witted and silver-tongued, and can bring a dash of humor and intellectual direction to help focus Pisces’s dreamy view of the world. Pisces has the gift of intuitive empathy; they connect very well with others on a rather subtle emotional level, and their dreamy nature makes them quite open-minded — in short, Pisces expects the unexpected. Gemini is open-minded as well; mentally both agile and flexible, the Twins are gifted at seeing all sides of an issue and at communicating with other people. This relationship is all about flexibility and connection.</p>`],
        "svg": `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
        <!-- Created with Inkscape (http://www.inkscape.org/) -->
        
        <svg
           xmlns:dc="http://purl.org/dc/elements/1.1/"
           xmlns:cc="http://creativecommons.org/ns#"
           xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
           xmlns:svg="http://www.w3.org/2000/svg"
           xmlns="http://www.w3.org/2000/svg"
           xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
           xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
           width="50.86133mm"
           height="50.86133mm"
           viewBox="0 0 718.79998 718.79998"
           id="svg2"
           version="1.1"
           inkscape:version="0.91 r13725"
           sodipodi:docname="GeminiDrawing5.svg">
          <defs
             id="defs4">
            <filter
               inkscape:label="Modified combined Lighting"
               inkscape:menu="Bevels"
               inkscape:menu-tooltip="Basic specular bevel to use for building textures"
               style="color-interpolation-filters:sRGB"
               id="filter125483"
               height="1.04"
               width="1.04"
               y="-0.02"
               x="-0.02">
              <feGaussianBlur
                 stdDeviation="6"
                 in="SourceGraphic"
                 result="result0"
                 id="feGaussianBlur125485" />
              <feDiffuseLighting
                 lighting-color="#ffffff"
                 diffuseConstant="1"
                 surfaceScale="4"
                 result="result5"
                 id="feDiffuseLighting125487">
                <feDistantLight
                   elevation="45"
                   azimuth="235"
                   id="feDistantLight125489" />
              </feDiffuseLighting>
              <feComposite
                 k1="1.4"
                 in2="SourceGraphic"
                 in="result5"
                 result="fbSourceGraphic"
                 operator="arithmetic"
                 id="feComposite125491"
                 k2="0"
                 k3="0"
                 k4="0" />
              <feGaussianBlur
                 result="result0"
                 in="fbSourceGraphic"
                 stdDeviation="6"
                 id="feGaussianBlur125493" />
              <feSpecularLighting
                 specularExponent="25"
                 specularConstant="1"
                 surfaceScale="4"
                 lighting-color="#ffffff"
                 result="result1"
                 in="result0"
                 id="feSpecularLighting125495">
                <feDistantLight
                   azimuth="235"
                   elevation="45"
                   id="feDistantLight125497" />
              </feSpecularLighting>
              <feComposite
                 k3="1"
                 k2="1"
                 operator="arithmetic"
                 in="fbSourceGraphic"
                 in2="result1"
                 result="result4"
                 id="feComposite125499"
                 k1="0"
                 k4="0" />
              <feComposite
                 operator="in"
                 result="fbSourceGraphic"
                 in2="SourceGraphic"
                 in="result4"
                 id="feComposite125501" />
              <feColorMatrix
                 result="fbSourceGraphicAlpha"
                 in="fbSourceGraphic"
                 values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
                 id="feColorMatrix125639" />
              <feGaussianBlur
                 id="feGaussianBlur125641"
                 stdDeviation="1.1000000000000001 1.1299999999999999"
                 result="blur"
                 in="fbSourceGraphic" />
              <feColorMatrix
                 id="feColorMatrix125643"
                 values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 50 0 "
                 result="colormatrix" />
              <feComposite
                 id="feComposite125645"
                 in2="fbSourceGraphic"
                 in="colormatrix"
                 operator="in" />
            </filter>
            <filter
               inkscape:collect="always"
               style="color-interpolation-filters:sRGB"
               id="filter126669"
               x="-0.099000007"
               width="1.198"
               y="-0.099000007"
               height="1.198">
              <feGaussianBlur
                 inkscape:collect="always"
                 stdDeviation="2.4750002"
                 id="feGaussianBlur126671" />
            </filter>
          </defs>
          <sodipodi:namedview
             id="base"
             pagecolor="#ffffff"
             bordercolor="#666666"
             borderopacity="1.0"
             inkscape:pageopacity="0.0"
             inkscape:pageshadow="2"
             inkscape:zoom="0.73734003"
             inkscape:cx="77.304903"
             inkscape:cy="356.68753"
             inkscape:document-units="px"
             inkscape:current-layer="layer1"
             showgrid="false"
             inkscape:window-width="1366"
             inkscape:window-height="705"
             inkscape:window-x="-8"
             inkscape:window-y="-8"
             inkscape:window-maximized="1"
             fit-margin-top="0"
             fit-margin-left="0"
             fit-margin-right="0"
             fit-margin-bottom="0" />
          <metadata
             id="metadata7">
            <rdf:RDF>
              <cc:Work
                 rdf:about="">
                <dc:format>image/svg+xml</dc:format>
                <dc:type
                   rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
                <dc:title></dc:title>
              </cc:Work>
            </rdf:RDF>
          </metadata>
          <g
             inkscape:label="Layer 1"
             inkscape:groupmode="layer"
             id="layer1"
             transform="translate(729.21106,-519.00796)">
            <g
               id="g91385">
              <circle
                 transform="matrix(10,0,0,10,-3421.7007,-4530.6759)"
                 id="circle124452-5"
                 r="30"
                 cy="540.90839"
                 cx="305.18896"
                 style="fill:#000000;fill-opacity:1;stroke:none;stroke-opacity:1;filter:url(#filter126669)" />
              <circle
                 transform="matrix(10,0,0,10,-3421.7007,-4530.6759)"
                 id="circle124452"
                 r="30"
                 cy="538.90839"
                 cx="303.189"
                 style="fill:#fb7603;fill-opacity:1;stroke:none;stroke-opacity:1;filter:url(#filter125483)" />
              <path
                 id="path4"
                 d="m -457.92677,698.30832 c -7.3305,0.4545 -14.47185,3.34793 -19.9371,8.27543 -6.1695,4.98825 -9.5334,12.36832 -14.3529,18.49957 -8.00325,12.17475 -21.98032,18.87968 -29.68207,31.29293 -4.01625,7.0065 -7.07857,14.84339 -6.34957,23.09414 -0.24525,1.99125 -0.31253,4.00254 0.003,5.99379 -0.5895,9.40725 2.07457,19.26702 -1.50293,28.27827 -0.252,0.5265 -0.49739,1.05723 -0.71789,1.60173 l 0,0.59202 c 0.333,1.03725 1.368,1.413 2.4075,1.1925 2.52225,-0.6435 2.85982,-3.6362 3.32332,-5.76245 1.206,-10.134 0.18,-20.45467 -0.405,-30.58418 l -0.007,-0.20039 c 0.69525,-6.18075 1.67618,-12.40425 3.46043,-18.37125 2.64825,-4.42575 6.048,-8.31368 9.48375,-12.13418 12.43575,-11.93175 24.14005,-24.67132 34.15255,-38.72707 8.29125,-12.27375 30.08925,-15.42375 38.7225,-1.99125 -5.13,1.38825 -11.19798,1.71232 -14.97798,5.94457 -4.6395,7.5285 -6.48,16.40918 -11.16,23.93543 -1.296,2.214 -2.7765,4.32225 -3.99375,6.58125 -2.19825,3.24225 -4.77682,6.21907 -6.96832,9.45457 -1.404,1.0665 -2.50663,2.44125 -3.62038,3.79125 -0.55125,0.50175 -1.10012,1.01025 -1.59962,1.56375 -1.77525,1.37025 -3.50093,2.80343 -5.21543,4.24793 -0.44325,0.3285 -1.25114,0.45914 -1.30289,1.10039 3.0015,2.46375 6.33614,4.70039 10.12289,5.72414 10.18125,3.312 23.66973,3.24225 31.06548,-5.6475 0.4905,-0.50175 0.94732,-1.03753 1.30957,-1.63828 1.3905,-0.5895 2.62138,-2.73347 1.19038,-3.87422 -3.35475,-0.75825 -9.32195,-0.0608 -10.21745,-4.45957 -0.005,-0.0922 -0.0155,-0.27689 -0.02,-0.36914 0.1755,-2.4075 0.44557,-5.07143 2.34457,-6.80168 0.756,-0.24975 1.54793,-0.36232 2.33543,-0.47707 1.86525,0.78975 4.20982,2.10832 6.04582,0.58957 3.1185,-2.943 1.83811,-8.469 5.91961,-10.71 3.177,-1.575 0.65475,-5.46532 1.06875,-8.16082 -1.629,-5.26725 3.92387,-9.19786 3.01712,-14.46961 -0.38925,-10.4355 -11.55137,-16.71532 -20.98337,-17.37457 l -2.95875,0 z m -14.75823,12.46746 c -0.22675,0.0162 -0.55899,0.27717 -0.64759,0.57586 -7.94925,11.52225 -15.99532,23.10961 -25.78957,33.14461 -4.0905,3.65175 -7.506,8.12693 -11.14875,12.25793 -5.03775,5.409 -5.99821,13.02546 -7.82296,19.86996 -0.8955,4.392 -0.28822,9.55344 -0.39622,14.21544 -0.60075,7.95825 0.87322,16.32612 -2.03378,23.96037 1.485,1.2375 4.01603,1.70775 4.79003,-0.57375 0.1665,-6.33375 0.45232,-12.80502 -0.62543,-19.09827 0.018,-4.2165 0.31065,-8.43743 0.21165,-12.65168 l 0,-0.40043 c 0.7065,-3.61575 1.071,-7.40925 1.65375,-11.08125 1.77975,-6.13575 5.2536,-11.57168 8.9796,-16.67918 12.0375,-13.45275 24.57218,-26.88982 33.00293,-43.03582 0.11518,-0.38096 0.003,-0.51638 -0.17366,-0.50379 z m 7.54488,1.77047 c -2.8755,3.294 -5.85015,6.54996 -8.2104,10.25121 -11.8845,15.00075 -24.28432,29.64797 -35.14957,45.42047 -0.64125,0.53325 -0.33532,2.23439 0.58043,1.70789 14.166,-18.891 29.99482,-36.59625 42.78832,-56.4975 0.036,-0.2475 0.35347,-0.82807 -0.009,-0.88207 z m 136.09089,2.36179 c -6.73375,0.005 -13.44022,2.70464 -19.16086,6.13196 -6.165,3.57975 -8.15407,10.89914 -8.82457,17.50289 0.2655,2.124 1.44246,3.96682 2.49996,5.77582 0.7065,2.6775 0.0698,5.49436 -1.31167,7.84336 -1.458,4.1805 5.80943,2.65289 6.23918,6.37664 -1.74826,1.3365 -3.1164,3.63797 -5.4879,3.78422 -5.0895,0.63675 -10.20382,1.04175 -15.32707,1.2825 -2.7315,-0.1125 -5.48543,0.26578 -8.18543,-0.30797 -1.08225,-0.28575 -2.178,-0.54021 -3.29625,-0.59871 -10.8,-2.736 -21.8655,-4.16679 -32.94,-5.21754 -7.91325,-0.4995 -15.86925,-0.10575 -23.79375,-0.21375 0.8775,4.9905 8.24632,3.12286 9.92707,7.41586 0.4365,4.527 -1.88092,8.73232 -3.69667,12.71707 -1.6695,3.67875 -3.98258,6.99532 -6.03458,10.45581 -1.017,1.02375 -1.9215,2.1465 -2.745,3.33 -2.54925,2.59875 -5.12332,5.1975 -8.12707,7.27875 -10.638,7.3485 -24.40357,7.06488 -36.39832,3.61338 -2.0205,-0.91575 -0.85703,1.80237 -0.47003,2.68662 1.83375,4.80825 5.49,8.7568 9.5175,11.8663 0.0585,0.054 0.17775,0.16208 0.23625,0.21833 2.45925,2.781 5.1366,5.36637 7.8321,7.91787 1.962,2.817 4.74997,5.16805 5.95372,8.45755 -2.81025,11.35125 -7.42079,22.78358 -7.49954,34.71083 -0.054,0.89325 -0.2205,1.76862 -0.2925,2.66412 1.0935,-0.4815 1.8,-1.67405 2.57625,-2.59205 1.32525,-1.3725 2.78564,-2.61907 3.98039,-4.11082 1.7685,-1.74825 3.82275,-3.27813 5.1975,-5.37963 8.0595,-7.722 15.97036,-15.79955 22.05211,-25.20455 2.30625,-3.17477 4.79482,-6.9232 4.09957,-11.04295 -3.92625,-4.38075 -1.87635,-10.5368 -2.2296,-15.8783 0.20475,-4.239 -0.16215,-8.96632 2.91585,-12.36832 2.8485,-4.4775 2.46143,-10.26465 1.59293,-15.2529 1.7055,-1.863 4.72754,-0.71768 6.95954,-1.05293 3.951,0.50175 7.929,0.74496 11.89125,1.13871 5.09175,0.65475 11.07217,2.10572 14.74417,-2.52703 6.579,0.73125 13.05654,2.3805 19.69629,2.50875 3.93075,0.0878 7.86839,0.0451 11.78789,-0.26086 5.4855,1.2555 12.51007,-2.36918 17.03708,1.93957 0.4815,1.881 -0.35093,4.53599 -2.61668,4.63499 -4.8555,0.819 -10.67197,2.09455 -13.08622,6.9163 -1.37475,3.63825 -1.0215,9.522 3.375,10.78875 1.21725,0.83925 3.06697,-0.86835 3.88372,0.63915 -0.549,5.91075 -2.10375,11.91837 -5.45625,16.89537 -1.062,1.7595 -3.10972,3.00123 -3.39997,5.16798 -1.49175,10.69425 1.66718,22.40127 9.64793,29.94327 2.1015,1.7325 4.6935,3.49863 7.57125,2.88213 1.22175,-0.4815 2.79022,-2.89365 4.00747,-1.1454 0.65475,3.35475 0.18232,7.09902 2.28832,10.04202 3.7845,5.37525 9.29685,9.315 13.5021,14.40002 3.231,4.131 6.36743,8.35846 8.78168,13.03171 0.1845,0.7965 0.48825,1.56157 0.945,2.24332 0.20475,1.01025 0.38025,2.04772 0.6525,3.05122 0.5265,6.65775 1.38615,13.48193 -0.0921,20.07668 -2.754,10.07099 -8.26658,19.16992 -14.46083,27.46792 0.10575,3.1005 3.73725,0.61875 4.41,-1.08 1.18575,0.9765 2.1015,2.331 3.5775,2.91375 0.96075,-2.89575 2.1465,-5.778 4.51125,-7.83 3.0735,-1.67625 6.56311,-0.64793 9.65461,0.44332 0.70425,0.40725 1.42875,0.79629 2.14875,1.19004 1.55925,1.1115 3.9825,2.26807 3.72375,4.59457 0.0585,0.927 -1.00111,1.73722 -1.84711,1.23997 -2.82825,-1.521 -6.25957,-3.3729 -9.48832,-2.1129 -4.15575,1.755 -3.43328,7.57793 -3.54128,11.20043 0.23175,3.2085 0.38896,6.98625 2.95171,9.2925 1.18575,1.70775 2.556,3.28282 4.03875,4.74082 1.62675,2.241 3.53039,4.25686 5.35289,6.33586 0.49725,0.621 1.044,1.20846 1.63125,1.75746 1.269,1.77075 2.61458,3.52329 4.26833,4.95879 0.95175,1.41075 2.07675,2.70929 3.38625,3.80954 0.99675,1.377 2.05417,2.73346 3.35917,3.84046 1.3725,1.89675 2.88661,3.69704 4.50211,5.39579 1.30275,1.82703 2.57879,3.68543 4.05704,5.38413 0.29475,0.5783 0.67246,1.1114 1.11796,1.5884 1.05075,2.7203 0.936,5.8905 2.66625,8.3363 0.4545,0.8955 1.43122,1.2713 2.33122,1.557 l 0.59625,0 c 4.20075,-2.6437 9.38228,0.4927 13.58753,-1.9958 1.47825,-1.566 -0.60525,-3.4288 -2.115,-3.8338 -3.46275,-1.1902 -5.85653,-3.9805 -8.28878,-6.5545 -0.891,-1.575 -1.7934,-3.13406 -2.73165,-4.67756 -0.66375,-1.69875 -1.2351,-3.44721 -2.2071,-4.99746 -0.1935,-0.72225 -0.47475,-1.41518 -0.855,-2.05418 -0.513,-1.377 -1.08218,-2.72903 -1.85168,-3.98003 -0.8955,-2.5425 -1.80675,-5.11904 -3.13875,-7.46579 -5.3415,-13.248 -11.04765,-26.74546 -20.2029,-37.84921 -3.15225,-4.24575 -6.88267,-8.19458 -10.06417,-12.28958 4.23,-8.84249 4.08382,-19.18124 1.61332,-28.52999 -2.259,-7.58925 -6.72757,-14.19293 -10.90582,-20.81918 -1.4355,-3.86552 0.3465,-8.10014 -0.7425,-12.05789 -0.67725,-4.095 -1.80015,-8.32488 -4.26165,-11.73588 -0.19575,-0.69975 -0.56925,-1.3412 -1.1475,-1.7912 -2.907,-3.699 -3.70785,-8.86485 -0.84585,-12.8271 6.1065,-7.78727 13.97467,-13.92322 20.39167,-21.44497 0.62775,-1.368 2.87318,-2.13293 3.44918,-0.36668 0.74025,11.60325 -0.4386,23.3259 0.5829,34.9179 2.8935,12.43575 6.84428,24.63728 11.34878,36.58253 1.5705,4.66425 4.58782,9.15532 9.00457,11.45707 2.2725,-0.60075 3.9129,-2.55578 5.18415,-4.43003 5.202,-4.27275 2.05635,-11.88232 -2.6079,-15.06832 -1.764,-0.79425 -3.31643,0.56475 -4.46168,1.74375 -1.42875,-0.12375 -2.28375,-1.84297 -2.565,-3.08497 -1.3995,-14.69025 -2.6595,-29.40053 -4.725,-44.01878 0.40275,-7.16175 2.30625,-14.1999 2.8125,-21.3729 1.386,-6.63075 1.3749,-14.2041 -3.09585,-19.7121 -4.56075,-8.5455 -10.89472,-15.99301 -17.40622,-23.10751 -5.166,-5.7555 -12.20385,-9.48832 -17.09085,-15.52957 -3.8835,-4.07025 -4.68675,-9.94732 -6.21,-15.13582 -0.13725,-0.9945 -0.28583,-2.00004 -0.66833,-2.93379 -2.49525,-4.8375 -6.37192,-9.8505 -11.87543,-11.2725 0.42975,-1.45125 1.41743,-2.65732 2.34668,-3.81832 4.635,-3.17925 9.92468,-5.27414 15.38543,-6.52289 5.06925,-0.378 10.54372,-0.42525 15.00997,2.295 5.38875,5.16375 7.91078,12.43371 12.09128,18.49746 1.95525,3.9375 4.13325,7.893 7.03125,11.205 3.89925,6.41925 9.31725,11.65022 14.88375,16.60922 5.29875,6.09975 10.46932,12.53475 13.34707,20.1825 1.728,4.77675 2.67068,9.77415 3.69668,14.7354 0.50625,3.34575 1.00365,6.6936 1.3704,10.0596 0.28575,2.78325 0.22042,5.6274 0.90667,8.35665 1.37025,0.92925 3.39511,0.2273 3.83836,-1.39043 l 0.0563,-0.17122 c 0.2745,-0.92925 0.45914,-1.88523 0.61665,-2.83923 l 0,-3.21327 c -0.054,-0.0922 -0.16433,-0.27653 -0.21833,-0.36878 -0.1395,-7.89525 -2.33985,-15.7072 -5.59335,-22.8667 -3.249,-7.87049 -7.74,-15.2687 -13.78125,-21.30995 -5.89725,-7.8345 -13.41008,-14.29882 -19.10708,-22.30207 -1.791,-2.8845 -3.186,-6.03204 -5.18625,-8.77254 -3.591,-8.57925 -8.541,-17.89425 -17.76375,-21.36375 -2.21513,-0.66994 -4.46288,-0.96778 -6.70746,-0.9661 z m -135.63211,4.5886 c -5.5485,7.137 -9.62543,15.30443 -14.47418,22.92293 -5.06925,7.77825 -11.56289,14.57114 -18.86414,20.28164 -0.61425,0.36 0.24082,0.77604 0.61207,0.81879 2.76975,-1.53 5.29432,-3.49207 7.60957,-5.64082 10.82925,-10.38375 19.37708,-23.14097 25.14833,-36.97172 0.10575,-0.405 0.69735,-1.44457 -0.0317,-1.41082 z m 137.40082,7.93371 c -0.26281,0.007 -0.38813,0.34172 -0.19125,1.19672 1.62,9.621 8.69858,16.94932 13.17833,25.30582 6.48675,9.621 14.57107,18.05604 21.37957,27.44754 7.038,11.41425 9.945,24.8402 10.63125,38.10622 0.027,1.6695 0.1146,3.54368 2.01585,4.19168 1.02825,-0.66375 2.29958,-1.46475 1.82708,-2.93625 -1.233,-19.93275 -8.57483,-40.24133 -23.08958,-54.37583 -9.92025,-10.6245 -18.27217,-22.93186 -23.99167,-36.29461 0.0619,-1.09055 -1.18138,-2.65749 -1.75958,-2.64129 z m 8.59677,0.11848 c -0.7333,-0.0298 -0.73408,2.36777 0.01,3.05156 3.9105,8.24625 8.80418,16.00425 13.68668,23.70375 5.904,7.2945 11.64396,14.73054 17.67621,21.92379 4.0815,5.31675 6.58786,11.63257 9.11461,17.74582 l 0.018,0.1712 c 2.85525,8.964 3.80257,18.38455 5.16832,27.6388 3.43125,1.61325 3.40432,-3.11625 2.98582,-5.1975 -2.0745,-15.69375 -6.06593,-32.19757 -16.99418,-44.25082 -10.99125,-14.16375 -22.91203,-27.92025 -30.87703,-44.1 -0.31992,-0.47989 -0.58254,-0.67826 -0.78785,-0.6866 z m -16.11951,4.27851 c -0.15098,-9e-4 -0.31815,0.0283 -0.50518,0.0939 0.67275,4.17375 3.73717,7.60711 5.53042,11.39836 7.02675,13.90725 18.75165,24.534 27.68415,37.11375 8.73225,12.22876 10.656,27.58493 12.5775,42.09293 0.11025,1.053 0.29693,3.0872 1.91918,2.67995 2.3895,-2.14425 1.0935,-5.8343 0.8775,-8.62205 -1.44,-17.79977 -8.93468,-35.20372 -21.75293,-47.76997 -9.738,-10.37925 -17.45325,-22.38504 -24.42375,-34.73754 -0.59456,-0.76388 -0.85,-2.24275 -1.90689,-2.2493 z m -159.96515,35.97012 c -0.85275,0.0338 -1.52528,0.67268 -2.16878,1.16543 4.41675,8.1405 13.90703,12.59093 22.95878,12.60668 8.4555,0.31275 17.45332,-1.85182 24.02332,-7.23832 -5.8185,1.99125 -11.75618,3.77346 -17.91668,4.34496 -2.43675,0.12375 -4.8555,-0.0429 -7.29,0.0246 -5.0625,-0.603 -10.08892,-2.17582 -13.94542,-5.65207 -1.6965,-1.77525 -3.61597,-4.47729 -5.66122,-5.25129 z m -5.80711,2.78086 c -0.9,0.60525 -1.6041,1.71661 -2.1396,2.62336 4.35375,6.34725 10.65143,11.52703 18.05168,13.85577 9.5175,3.1635 20.00482,1.47813 28.91707,-2.75413 1.71,-0.78075 3.45135,-1.57725 4.94085,-2.73375 -1.6155,0.5175 -3.19035,1.15664 -4.7946,1.70789 -15.63975,5.26499 -35.16315,1.30936 -44.9754,-12.69914 z m -4.94542,5.60707 c -1.6065,1.638 -4.67093,4.734 -1.82918,6.78375 4.059,4.15576 9.23835,6.96369 14.2221,9.85044 12.6675,7.677 29.92486,6.34962 41.24461,-3.16338 1.30725,-0.6525 2.65754,-2.03427 3.41579,-2.89827 -2.2905,0.99675 -4.40115,2.36947 -6.6579,3.44497 -7.26525,3.02625 -15.27757,4.7091 -23.14582,3.5121 -11.25,-1.0665 -21.0711,-8.3316 -27.2496,-17.52961 z m -0.69083,14.19961 c 0.12825,4.104 -0.0586,8.21265 0.10793,12.31665 l 0.0337,0.19125 c -0.7875,6.6735 -0.13282,13.62578 -0.26332,20.39378 -0.31725,0.55125 -0.17536,1.21752 -0.22711,1.82952 -0.855,5.121 -3.13432,10.64673 -2.25457,15.70923 -1.30275,1.47375 -3.64928,2.77882 -3.21503,5.07832 0.0293,12.70575 0.21593,25.4162 -0.58957,38.09497 -0.5535,5.39775 -1.4985,11.36918 0.95625,16.45418 2.84175,7.182 5.79832,14.31885 8.64457,21.50085 0.36675,1.1745 2.38718,0.75368 2.04293,-0.62332 0.207,-3.0735 -2.54715,-6.40996 -2.0454,-9.20671 4.8915,1.09575 0.84825,-5.00182 1.71,-7.37332 1.15875,-4.581 -1.48028,-8.48025 -3.47378,-12.3075 -1.14975,-3.37275 -0.36697,-6.93 -0.29497,-10.38375 0.9135,-5.19977 1.55482,-10.51222 2.45707,-15.72997 0.87975,-3.05775 1.41511,-6.25248 2.04961,-9.36423 2.6865,-8.78625 6.58357,-17.40382 7.36207,-26.68955 0.29475,-6.8715 -0.14603,-13.75672 0.28372,-20.62372 0.69525,-2.979 1.17646,-6.10185 1.80421,-9.12585 -1.10025,-0.4275 -2.17336,-0.96513 -3.34336,-1.17213 -3.56175,-1.917 -6.84675,-4.4012 -9.945,-6.95495 -0.324,-0.8505 -0.96075,-1.6425 -1.8,-2.01375 z m 78.05884,37.73708 c -0.17073,-0.002 -0.34925,0.0207 -0.53509,0.0675 -0.2025,6.408 -3.38414,12.17235 -7.13039,17.1921 -8.57025,11.502 -19.62,20.8125 -30.58875,29.93625 -1.89675,1.8855 -4.01596,4.44375 -3.63796,7.23375 12.987,-12.753 27.68153,-23.94218 38.57378,-38.67293 2.66175,-3.62925 5.211,-7.63425 5.81625,-12.18375 0.0816,-1.47016 -0.84753,-3.56486 -2.49784,-3.57292 z m 57.95156,1.935 c -5.346,3.8115 -5.43158,11.4051 -3.89708,17.20335 4.94325,18.00675 17.39025,32.56222 24.75001,49.50247 6.228,12.66075 6.27532,28.06185 1.37707,41.12085 0.9135,1.6875 2.25203,4.31797 4.49753,3.74872 2.06775,-4.437 2.1084,-9.513 2.32665,-14.32125 0.2205,-7.1415 0.23378,-14.454 -1.57747,-21.42 -5.93325,-17.74125 -18.78293,-32.05597 -25.92668,-49.22122 -2.4795,-6.23475 -3.80932,-13.27057 -1.92832,-19.84957 0.72675,-2.187 2.61704,-5.1006 0.37829,-6.76335 z m -52.38141,3.54234 c -0.0825,0.003 -0.16706,0.0106 -0.25313,0.0218 -1.01925,7.42725 -5.23343,14.4583 -10.05293,20.31505 -10.96425,13.29975 -24.5496,24.07493 -37.04835,35.83793 -1.13175,1.43325 -1.48297,3.46979 -1.01497,5.15954 0.81,-1.2915 1.47397,-2.73825 2.81497,-3.5775 15.705,-11.54025 29.58067,-25.48139 41.31667,-41.02664 2.64375,-3.528 5.5935,-7.01538 7.05375,-11.22963 0.60378,-1.99877 -0.25777,-5.60252 -2.81601,-5.50053 z m 6.9423,9.02952 c -0.0701,-0.003 -0.14118,-0.003 -0.21339,0.002 -1.38825,7.74675 -6.1989,14.82968 -11.2479,20.92043 -10.89675,13.30875 -25.92907,22.09957 -39.01957,32.97832 -1.50075,1.512 -3.58628,2.84168 -4.22753,4.95668 0.0428,1.1025 1.5636,0.70904 2.10585,0.13079 6.273,-5.74425 12.7665,-11.33565 20.12625,-15.6579 14.4315,-9.77625 28.64243,-21.64035 35.47793,-38.1396 0.34439,-1.98133 -0.82725,-5.10106 -3.00164,-5.18976 z m 37.48641,0.60574 c -0.2236,0.002 -0.41984,0.18732 -0.40605,0.61947 -3.85425,5.44273 -1.33208,13.46385 0.42292,19.38585 3.90375,12.654 11.08793,24.102 16.65668,35.9775 3.41325,9.099 7.308,18.684 5.38875,28.5975 -0.5985,2.9115 -2.18018,7.42718 1.09582,9.29918 3.006,-2.178 1.18575,-6.95236 1.8225,-10.17211 0.7155,-1.035 0.0698,-2.80118 -0.007,-4.00042 0.054,-6.966 -0.945,-14.10097 -3.8925,-20.47747 -1.926,-3.40875 -3.78675,-6.85785 -5.79375,-10.2171 -4.8465,-9.09675 -11.26807,-17.6199 -13.47082,-27.88665 -1.82475,-6.6465 -0.22957,-13.63923 -1.20832,-20.36673 0.0114,-0.46321 -0.32108,-0.76205 -0.60856,-0.75902 z m -4.23809,11.74572 c -1.152,0.52875 -2.10375,1.96178 -2.66625,3.14753 -3.0285,3.204 -4.65518,7.72665 -6.13793,11.84415 -1.06425,1.93725 -1.62211,4.16685 -2.25211,6.2796 -3.9015,10.42425 -5.10517,21.67004 -7.65667,32.42954 -2.358,6.72075 -4.86247,13.455 -6.94372,20.26125 -0.945,2.0835 -2.09025,4.4415 -2.41875,6.80625 -2.448,4.36725 -3.64028,9.855 -4.76753,14.81625 0.007,0.0878 0.02,0.26078 0.0267,0.34628 -2.78775,9.3555 -4.85304,19.01939 -7.44504,28.46039 -1.00799,2.817 -2.17364,5.64983 -2.93414,8.55458 -1.68975,3.087 -3.23107,6.88253 -5.34832,9.94253 -3.681,3.28955 -7.79836,6.42605 -11.96086,8.95955 -2.4345,1.4378 -8.17875,1.8809 -7.29,5.5371 4.914,2.0475 10.43993,-1.0933 15.59918,0.2612 4.02975,0.513 11.72047,2.7248 12.32122,-3.3975 0.89775,-4.3087 0.55567,-9.32396 2.26792,-13.69121 0.6705,-1.26675 1.071,-2.67982 1.33875,-4.07707 2.21175,-5.5935 5.35486,-11.30407 8.74336,-16.46332 2.034,-2.1645 3.91064,-4.53375 5.65664,-6.93 0.8235,-0.423 1.38586,-1.22836 1.79086,-2.03836 4.68,-4.25475 8.25293,-10.12971 8.08418,-16.66371 0.6435,-2.72925 0.25446,-5.886 -0.59379,-8.56125 -0.7605,-4.5405 -6.73439,-3.99121 -9.21164,-1.47796 -1.40175,0.2565 -2.37818,1.47128 -3.70793,1.92128 0.42975,-3.18375 2.00482,-6.02543 3.66082,-8.71418 0.747,-0.50625 1.40408,-1.14975 1.98458,-1.83375 2.637,-1.26225 5.65853,-1.05307 8.15378,0.47918 0.82125,1.0755 2.12175,1.656 2.97,2.7225 2.16225,-6.192 5.22239,-12.08032 9.15539,-17.34082 2.34675,-2.754 4.83975,-5.37728 7.6725,-7.63628 1.368,-0.6795 2.82833,-1.86307 3.12083,-3.43582 4.65075,-6.40125 -0.63922,-14.60483 -4.10872,-20.35583 -0.006,-0.0433 -0.0127,-0.086 -0.0214,-0.12796 -0.0333,-0.15932 -0.0917,-0.30738 -0.16277,-0.4493 -1.7e-4,0 -1.8e-4,0 -3.6e-4,-0.002 -2.0766,-6.48964 -3.80188,-13.68581 -5.38172,-19.94835 -0.0923,-1.6785 -0.39825,-3.37065 -0.91125,-4.95915 -0.0203,-1.575 -0.50203,-3.10253 -0.62578,-4.66628 z m -24.77461,0.80753 c -0.52875,1.50075 -1.07535,3.00165 -1.58835,4.50915 -0.19125,0.279 -0.34004,0.58962 -0.42329,0.92037 -2.32425,3.81375 -5.05561,7.35288 -7.88836,10.79088 -1.251,1.134 -2.5695,2.2611 -3.63375,3.56835 -1.42875,0.90675 -2.71792,2.11507 -3.73042,3.46957 -2.2095,1.36125 -4.60125,3.24922 -6.255,4.92997 -8.802,6.1695 -18.54,10.93478 -27.77625,16.38878 -2.5425,1.21275 -5.30093,2.59665 -7.38668,4.30665 -3.65625,1.08675 -5.418,5.08268 -7.2225,8.07293 -1.7145,2.39175 -3.078,5.11439 -4.01625,7.91789 -1.692,2.91825 -2.77679,6.43021 -4.10204,9.61171 -4.338,10.3185 -8.982,20.68221 -10.69875,31.83996 -1.5075,10.179 -3.49875,20.34211 -4.30875,30.59086 -0.65475,2.1465 -1.827,4.0545 -2.77875,6.0525 -2.61,3.0983 -5.56875,6.4373 -8.69625,9.2363 -1.881,0.6142 -3.33661,2.1846 -5.22211,2.8754 -1.54125,1.0575 -0.13267,3.3865 1.59083,2.8983 4.65975,-0.052 9.33067,0.085 13.99042,-0.081 2.04075,-0.8123 3.56161,-2.8238 4.18711,-4.8713 1.7145,-6.516 3.9555,-13.16023 6.26625,-19.61998 1.77075,-4.05 2.18947,-8.67136 4.69372,-12.41086 2.93175,-4.90275 8.0775,-7.96071 10.87875,-12.92871 2.67975,-4.12425 4.50428,-8.8605 5.80253,-13.59 1.25775,-2.7225 1.46504,-6.11971 2.54954,-8.71171 1.836,0.8055 1.64903,3.96646 2.45003,5.83171 2.3355,8.88075 3.00847,18.09021 3.78247,27.19371 1.34775,2.36925 2.81025,-1.07092 3.15,-2.50417 -0.657,-8.883 -3.22897,-17.4915 -5.40247,-26.08875 -1.33425,-4.43025 -2.07675,-9.11272 -4.185,-13.26622 -0.91575,-3.20175 -5.634,-2.55128 -7.03125,-5.82503 -0.77625,-1.40625 -1.08443,-4.005 1.03957,-4.2975 1.85625,1.3095 3.79118,2.79196 6.19418,2.70421 0.9945,0.639 2.10607,-0.19329 3.13207,-0.29004 3.74625,0.3735 3.26011,5.66993 4.73836,7.96043 3.10725,10.40175 3.58904,21.24225 3.89954,32.02875 0.93375,4.25925 6.0591,0.22486 5.23335,-2.68664 -0.69525,-7.71975 -2.7651,-15.68236 -5.39085,-22.73836 l -0.0383,-0.17789 c -1.2015,-7.1685 -6.29783,-13.87125 -4.47083,-21.33 0.48825,-0.51975 0.79425,-1.1655 1.13625,-1.7775 3.63375,-2.2095 3.7305,3.49672 5.47875,5.43622 0.21375,1.26 0.684,2.50635 1.33875,3.6021 0.972,3.31875 1.935,6.97507 2.93625,10.10707 0.14175,1.656 0.522,3.3099 0.93375,4.91415 1.2915,5.77575 1.16775,11.92275 2.50875,17.58375 3.25575,-0.96525 3.94636,-5.64308 2.31961,-8.36333 0.009,-0.0855 0.0249,-0.261 0.0316,-0.34875 -1.01925,-3.654 -1.83164,-7.65007 -3.12539,-11.02957 l -0.0517,-0.18 c -2.3715,-9.1305 -4.90485,-18.38039 -8.00085,-27.25664 0.423,-1.4265 1.53457,-2.61646 1.89457,-4.02046 0.24975,-0.0338 0.53078,-0.22297 0.77378,-0.0587 7.848,12.807 10.41772,27.8955 13.17622,42.40125 2.25225,1.5165 2.538,-2.56261 2.205,-4.01836 -2.6505,-14.5485 -6.59032,-29.10367 -13.40332,-42.28417 -1.431,-1.9935 -0.82125,-5.08064 0.48375,-7.15289 4.30875,-3.537 9.20685,-6.32918 13.94085,-9.23168 1.35225,-0.12375 3.01957,-2.3559 3.93082,-0.52665 1.4895,1.80225 2.68433,3.91943 4.43708,5.46293 2.16599,3.41721 4.81562,6.62157 7.42992,9.72457 0.0525,0.079 0.11052,0.15342 0.18175,0.21622 2.41875,3.70125 5.39986,7.01536 7.96711,10.62211 0.19125,-0.58275 0.42104,-1.19258 0.33329,-1.81583 3.1275,-10.26675 3.6246,-21.18585 5.4246,-31.7496 0.25875,-1.4805 0.84607,-2.92957 0.88207,-4.43707 1.79775,-4.3065 -0.91342,-9.01568 -3.10042,-12.69668 -0.0765,-0.33075 -0.207,-0.65925 -0.4725,-0.8775 -0.78075,-1.602 -1.67415,-3.27847 -2.9229,-4.52497 z m 48.61125,5.8704 c 4.752,7.9875 10.13408,15.66675 15.25958,23.4225 7.9965,11.97225 12.7866,27.06757 9.05835,41.39331 -2.09475,5.88825 -3.93053,11.87108 -6.16253,17.71208 -0.51525,1.0935 0.34621,2.20696 1.41046,2.38921 1.54575,0.57375 2.31532,-1.07746 2.94082,-2.10796 3.0105,-4.50675 4.25693,-10.04865 5.36168,-15.26415 2.0385,-7.20224 2.08357,-15.06142 0.28582,-22.36042 -2.18925,-8.73 -7.37768,-16.299 -12.70793,-23.38875 -4.725,-7.42275 -10.089,-14.73532 -15.44625,-21.79582 z m -7.37543,43.8546 c -0.702,0.7785 -1.82707,1.5954 -1.29832,2.82165 0.927,5.12775 1.94175,10.3365 1.0575,15.54749 -0.6345,2.54925 -1.09132,5.2065 -1.07332,7.84125 0.018,1.89675 3.23122,2.45243 3.75997,0.59168 1.70775,-5.11875 0.68828,-10.64707 -0.0475,-15.86707 -0.12825,-3.7665 -1.09561,-7.4205 -2.39836,-10.935 z m -16.47,21.80496 c -0.54,0.9585 -1.01707,1.96193 -1.29832,3.03293 -2.9835,5.91525 -5.22668,12.31861 -6.32918,18.87961 -1.4895,8.4015 4.24111,15.77939 9.00211,21.96914 1.3545,2.637 3.195,5.04907 4.95,7.41832 0.46575,1.09125 1.16797,2.12161 2.01622,2.93836 0.71775,1.7145 1.54778,3.50114 2.69753,4.95914 2.097,4.71375 4.64422,9.27204 6.27997,14.18381 0.44325,1.7347 0.4206,3.5302 0.7221,5.2875 -0.1485,1.6672 -0.12818,3.4897 0.35332,5.085 0.6885,3.4065 5.25375,2.7067 7.81875,2.6325 7.78276,-0.8483 15.54504,-0.054 23.31879,0.3445 0.09,-0.011 0.27,-0.036 0.36,-0.05 1.035,0.7178 4.24147,-1.3026 2.54497,-2.0541 -0.46575,-0.3128 -0.99225,-0.6549 -1.575,-0.6009 -9.2025,-3.3435 -18.49268,-8.5388 -24.32918,-16.7108 -2.20725,-2.826 -2.7384,-6.67568 -5.00415,-9.40043 -1.50525,-3.4605 -3.14557,-6.95692 -4.69582,-10.40167 -1.33875,-4.0365 -2.727,-8.1585 -3.99375,-12.16125 -1.73925,-6.345 -2.96986,-13.03883 -5.48086,-19.06208 -1.575,-5.724 -4.095,-11.30175 -7.3575,-16.29 z"
                 inkscape:connector-curvature="0"
                 style="opacity:0.7" />
            </g>
          </g>
        </svg>
        
        `
    },
    "Cancer": {
        "Aries": [43, `<h3>When Aries and Cancer come together in a love affair, it’s a case of opposites attracting.</h3>
        <p>Aries is rash and brash while Cancer is sensitive and emotional. Aries can certainly be emotional — in a fiery, impetuous way that can completely overwhelm Cancer. Even though Cancer usually likes to take time with relationships, Aries’s whirlwind approach can be extremely stimulating. Aries, on the other hand, may find the Cancerian sensitivity appealing; it’s a good balance for the typical Aries bluntness. Troubles may arise if Cancer’s mood swings or Aries’s aggression becomes hurtful. Both Signs must take time to listen to their partner’s needs and understand that they’re coming from different directions to meet a common goal.</p>`],
        "Taurus": [98, `<h3>When Taurus and Cancer come together in a love affair, it’s usually a very good combination.</h3>
        <p>They are two positions apart within the Zodiac, and such Signs tend to share karmic ties and a deep mutual understanding. These particular two Signs have much in common: Both prize security in a love relationship above almost all else; both tend to be nurturers (Cancer is emotionally nurturing while Taurus loves to spoil their lover with sensual delights, gifts and good, rich meals). They’re both quite domestic and love a quiet night spent at home with their sweetie.</p>`],
        "Gemini": [66, `<p>When Gemini and Cancer come together in a love affair, it may be a rather curious relationship. Sensitive, emotional Cancer has trouble communicating clearly, but clear communication is what defines Gemini. Gemini’s chivalrous nature and silver tongue may encourage the Crab to come out of its shell more quickly than usual; Cancer, in turn, can teach Gemini to slow down and appreciate the world, which the frenetic Twins hardly ever take time to do. If Gemini seems to ignore Cancer or doesn’t provide them with as much reassurance and intimacy as Cancer needs, trouble may ensue. These two signs approach the world in such different manners that they must be able to understand and accept one another’s differences.
        <br>
        Cancer is the sign of home and hearth, while Gemini is the thinker. Gemini can easily slip into the role of Cancer’s knight in shining armor; Cancer returns that favor with their characteristic urge to protect the ones they love. Quality of home life is important to Cancer, and Gemini will be spoiled by their Cancer lover’s hearty home cooking, soft bed and other creature comforts. Cancer is strongly intuitive and maintains an almost psychic connection with their loved ones but can tend toward possessiveness and idealization of their Gemini partner. If Gemini just reassures Cancer that they’re loved and cherished, all will go smoothly.
        <br>
        Gemini may tend to crave wild and unusual sexual experiences, while Cancer favors a tender embrace from their partner. Their sex life may involve a lot of communication from Gemini to reassure Cancer and build intimacy over time. Cancer may be reluctant at first, but if Gemini is willing to put in the work to make their Cancer feel safe, the two will develop a strong, unbreakable bond.</p>`],
        "Cancer": [75, `<h3>When two Cancerians come together in a love affair, a loving and yet very emotional domestic relationship ensues.</h3>
        <p>A Cancer-Cancer match makes for a deeply devoted duo, endlessly loyal to one another. Both will learn the ins-and-outs of their partner, the best ways to heat each other up or, if necessary, to cool one another down. Both will also find great comfort and satisfaction in their underlying commitment to one another. This couple is faithful and caring, helpful and sympathetic of individual needs and very oriented toward making a home and creating a sense of family — especially when they can get over their brooding, manipulative and self-pitying habits. If they can find a way to keep their fluid and moody emotions in check, this relationship will nurture both lovers.</p>`],
        "Leo": [34, `<h3>When Cancer and Leo make a love match, they understand and know how to satisfy basic emotional needs within one another.</h3>
        <p>Both these Signs require dedication and tender, loving care, but while Cancer seeks stability and emotional harmony, Leo craves heartfelt compliments and sincere admiration. Both are strongly loyal, even to the point of possessiveness, Cancer for safety’s sake, Leo for the sake of their self-confidence. They are also both committed to a enduring, rewarding connection. Since their desires are similar, a Cancer and a Leo may fill very important voids in each other’s lives.</p>`],
        "Virgo": [98, `<h3>When Cancer and Virgo make a love match, a strong, down-to-earth relationship with staying power is the happy result.</h3>
        <p>This is a relationship with great potential to get better and better over the passing years. Both Cancer and Virgo are goal-oriented and disciplined. They are sincere and devoted to one another and share a strong sense of purpose. No lightweight love here: These two were not really built for flings! Cancer and Virgo deeply admire one another: Virgo respects Cancer’s quiet strength and dedication while Cancer appreciates Virgo’s keen adaptability and intelligence.</p>`],
        "Libra": [43, `<h3>When Aries and Cancer come together in a love affair, it’s a case of opposites attracting.</h3>
        <p>Aries is rash and brash while Cancer is sensitive and emotional. Aries can certainly be emotional — in a fiery, impetuous way that can completely overwhelm Cancer. Even though Cancer usually likes to take time with relationships, Aries’s whirlwind approach can be extremely stimulating. Aries, on the other hand, may find the Cancerian sensitivity appealing; it’s a good balance for the typical Aries bluntness. Troubles may arise if Cancer’s mood swings or Aries’s aggression becomes hurtful. Both Signs must take time to listen to their partner’s needs and understand that they’re coming from different directions to meet a common goal.</p>`],
        "Scorpio": [94, `<h3>When Cancer and Scorpio make a love match, the resulting relationship draws together the energies of two emotionally intense Signs.</h3>
        <p>Signs such as these often combine well, each partner’s strengths balancing the other’s weaknesses. These Signs feel a strong sexual attraction, and when they are together the temperature in the room tends to rise! Cancer and Scorpio have a great deal in common, and much potential to keep their relationship passionate and going strong.</p>`],
        "Sagittarius": [52, `<h3>When Cancer and Sagittarius make a love match, they both need to be patient and give the relationship time to grow and mature.</h3>
        <p>As it develops, each love partner will discover that they have much to offer one another. At first, it just seems like Sagittarius is the thrill seeker who enjoys the occasional adrenaline rush, and that Cancer derives much more satisfaction from emotional security. Early in the relationship, Cancer may want more of a commitment than Sagittarius is willing to give. But as time goes by, Sagittarius will learn to appreciate the strong emotional support that Cancer offers.</p>`],
        "Capricorn": [84, `<h3>When Cancer and Capricorn make a love match, it’s a celestial pairing of great tenacity and determination.</h3>
        <p>Capricorn, the Sea Goat, is focused on logic, on being down-to-earth and real; Cancer brings a charge of emotional intensity to the relationship. Both hold one another to high standards tempered by an abiding mutual respect. In a Capricorn mate, Cancer finds dedication, and in return Capricorn comes to love Cancer’s persistence. These two Signs from opposite sides of the Zodiac can come together to create a very successful and secure connection.</p>`],
        "Aquarius": [28, `<h3>When Cancer and Aquarius make a love match, it can be a case of opposites attracting.</h3>
        <p>Cancer takes an emotional approach to life, Aquarius, an offbeat, unconventional approach. While Cancer often retreats into its shell, Aquarius takes every opportunity to be the extrovert, the organizer and party animal. They love to find themselves amongst friends; social settings are simply their thing! If a Cancer and an Aquarius can find a way to combine these qualities in a positive way, they can go anywhere together.</p>`],
        "Pisces": [99, `<h3>A love match between a Cancer and a Pisces is a positive meeting of spirits.</h3>
        <p>Both signs are basically tolerant and sympathetic, and Pisces is easily energized by Cancer’s ideas. A Pisces mate can open a Cancer’s eyes to the world of creativity and spirituality. In turn, Cancer’s practicality can be a guide, leading Pisces to the fruition of their dreamy, utopian ideas. This celestial pairing benefits from an amazingly strong and multifaceted emotional bond.</p>`],
        "svg": `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
        <!-- Created with Inkscape (http://www.inkscape.org/) -->
        
        <svg
           xmlns:dc="http://purl.org/dc/elements/1.1/"
           xmlns:cc="http://creativecommons.org/ns#"
           xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
           xmlns:svg="http://www.w3.org/2000/svg"
           xmlns="http://www.w3.org/2000/svg"
           xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
           xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
           width="50.86133mm"
           height="50.86133mm"
           viewBox="0 0 718.79998 718.79998"
           id="svg2"
           version="1.1"
           inkscape:version="0.91 r13725"
           sodipodi:docname="CancerDrawing5.svg">
          <defs
             id="defs4">
            <filter
               inkscape:label="Modified combined Lighting"
               inkscape:menu="Bevels"
               inkscape:menu-tooltip="Basic specular bevel to use for building textures"
               style="color-interpolation-filters:sRGB"
               id="filter125483"
               height="1.04"
               width="1.04"
               y="-0.02"
               x="-0.02">
              <feGaussianBlur
                 stdDeviation="6"
                 in="SourceGraphic"
                 result="result0"
                 id="feGaussianBlur125485" />
              <feDiffuseLighting
                 lighting-color="#ffffff"
                 diffuseConstant="1"
                 surfaceScale="4"
                 result="result5"
                 id="feDiffuseLighting125487">
                <feDistantLight
                   elevation="45"
                   azimuth="235"
                   id="feDistantLight125489" />
              </feDiffuseLighting>
              <feComposite
                 k1="1.4"
                 in2="SourceGraphic"
                 in="result5"
                 result="fbSourceGraphic"
                 operator="arithmetic"
                 id="feComposite125491"
                 k2="0"
                 k3="0"
                 k4="0" />
              <feGaussianBlur
                 result="result0"
                 in="fbSourceGraphic"
                 stdDeviation="6"
                 id="feGaussianBlur125493" />
              <feSpecularLighting
                 specularExponent="25"
                 specularConstant="1"
                 surfaceScale="4"
                 lighting-color="#ffffff"
                 result="result1"
                 in="result0"
                 id="feSpecularLighting125495">
                <feDistantLight
                   azimuth="235"
                   elevation="45"
                   id="feDistantLight125497" />
              </feSpecularLighting>
              <feComposite
                 k3="1"
                 k2="1"
                 operator="arithmetic"
                 in="fbSourceGraphic"
                 in2="result1"
                 result="result4"
                 id="feComposite125499"
                 k1="0"
                 k4="0" />
              <feComposite
                 operator="in"
                 result="fbSourceGraphic"
                 in2="SourceGraphic"
                 in="result4"
                 id="feComposite125501" />
              <feColorMatrix
                 result="fbSourceGraphicAlpha"
                 in="fbSourceGraphic"
                 values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
                 id="feColorMatrix125639" />
              <feGaussianBlur
                 id="feGaussianBlur125641"
                 stdDeviation="1.1000000000000001 1.1299999999999999"
                 result="blur"
                 in="fbSourceGraphic" />
              <feColorMatrix
                 id="feColorMatrix125643"
                 values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 50 0 "
                 result="colormatrix" />
              <feComposite
                 id="feComposite125645"
                 in2="fbSourceGraphic"
                 in="colormatrix"
                 operator="in" />
            </filter>
            <filter
               inkscape:collect="always"
               style="color-interpolation-filters:sRGB"
               id="filter126665"
               x="-0.099000007"
               width="1.198"
               y="-0.099000007"
               height="1.198">
              <feGaussianBlur
                 inkscape:collect="always"
                 stdDeviation="2.4750002"
                 id="feGaussianBlur126667" />
            </filter>
          </defs>
          <sodipodi:namedview
             id="base"
             pagecolor="#ffffff"
             bordercolor="#666666"
             borderopacity="1.0"
             inkscape:pageopacity="0.0"
             inkscape:pageshadow="2"
             inkscape:zoom="0.73594882"
             inkscape:cx="359.39999"
             inkscape:cy="359.39999"
             inkscape:document-units="px"
             inkscape:current-layer="layer1"
             showgrid="false"
             inkscape:window-width="1366"
             inkscape:window-height="705"
             inkscape:window-x="-8"
             inkscape:window-y="-8"
             inkscape:window-maximized="1"
             fit-margin-top="0"
             fit-margin-left="0"
             fit-margin-right="0"
             fit-margin-bottom="0" />
          <metadata
             id="metadata7">
            <rdf:RDF>
              <cc:Work
                 rdf:about="">
                <dc:format>image/svg+xml</dc:format>
                <dc:type
                   rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
                <dc:title></dc:title>
              </cc:Work>
            </rdf:RDF>
          </metadata>
          <g
             inkscape:label="Layer 1"
             inkscape:groupmode="layer"
             id="layer1"
             transform="translate(-20.788944,-519.00796)">
            <g
               id="g91385">
              <circle
                 transform="matrix(10,0,0,10,-3421.7007,-4530.6759)"
                 id="circle124440-1"
                 r="30"
                 cy="540.90839"
                 cx="380.18896"
                 style="fill:#000000;fill-opacity:1;stroke:none;stroke-opacity:1;filter:url(#filter126665)" />
              <circle
                 transform="matrix(10,0,0,10,-3421.7007,-4530.6759)"
                 id="circle124440"
                 r="30"
                 cy="538.90839"
                 cx="378.189"
                 style="fill:#ffaa01;fill-opacity:1;stroke:none;stroke-opacity:1;filter:url(#filter125483)" />
              <path
                 style="opacity:0.7"
                 id="path4"
                 d="m 403.59901,743.15688 c -1.6525,0.64 -6.4,-0.67 -5.95,2.375 5.47,2.3925 11.53774,2.71 17.12774,4.675 5.665,2.8425 9.79484,7.905 14.58984,11.925 2.055,2.5 4.25,4.90757 6.7125,7.01757 8.8975,8.8125 18.09492,18.46758 30.51992,21.98008 3.3225,0.87 7.35508,1.525 10.29258,-0.675 4.275,-2.3925 6.36234,-7.67765 5.70234,-12.41015 -0.0124,-4.0175 -3.20242,-7.22243 -6.73242,-8.66993 -13.945,-6.4875 -27.89742,-13.05507 -42.26992,-18.50507 -3.0725,-1.09 -6.04766,-2.54516 -9.24766,-3.22266 -6.135,-2.4475 -12.78734,-3.27734 -19.18984,-4.48984 l -1.55508,0 z m -81.01288,0.32773 c -9.65129,-0.0737 -18.90571,3.59258 -27.73711,7.19492 -10.05,3.625 -20.18992,7.37 -29.78242,12 -0.2625,0.0525 -0.52016,0.11219 -0.77266,0.17969 -7.68,4.02 -19.16977,6.36766 -20.72227,16.34766 -0.055,0.3575 -0.0602,0.73484 0.0773,1.07734 0.0175,3.1175 1.22492,6.62773 3.73242,8.56523 0.0625,0.0625 0.19281,0.18243 0.25781,0.24493 0.815,1.7675 3.00227,2.49507 4.77227,3.01757 8.3,0.6 16.12765,-3.74773 22.39765,-8.72773 2.825,-1.805 5.55508,-3.975 7.73008,-6.525 2.1,-1.1475 3.6575,-3.22742 5.25,-4.99492 1.9375,-1.5775 3.87242,-3.38227 5.26992,-5.47227 5.47,-5.68 11.30477,-11.22008 17.97227,-15.45508 2.89,-1.2275 5.69273,-2.80742 8.85273,-3.23242 3.1125,-0.475 6.76258,-0.45008 8.96758,-3.08008 -0.6925,-0.96 -2.25031,-0.66507 -3.25781,-0.99257 -1.00688,-0.0919 -2.0094,-0.13965 -3.00781,-0.14727 z m 59.38984,6.25234 c -2.85362,0.0784 -1.83516,3.83086 -0.19454,5.23008 8.3875,9.19 21.6425,9.16719 32.8,12.44219 5.2825,0.62 9.56532,3.99273 14.57032,5.45273 1.975,0.5875 2.28976,-1.90507 1.12226,-2.89257 -12.9575,-12.6725 -32.635,-11.80266 -47.675,-20.19766 -0.22562,-0.0292 -0.4328,-0.04 -0.62304,-0.0348 z m -37.61719,0.18086 c -1.47493,0.0285 -3.46914,0.99313 -4.28476,1.75391 -0.805,0.195 -1.64008,0.40523 -2.28008,0.96523 -3.8425,1.6675 -8.24227,2.53985 -11.93477,4.05235 -2.73,0.435 -5.42265,1.31515 -7.99765,2.24765 -3.6175,0.8825 -7.6425,1.85477 -10.7375,3.77227 -3.745,1.5275 -7.73985,3.43031 -10.23985,6.73281 -1.2775,0.4225 -2.30015,2.5175 -0.96015,3.4375 1.165,-0.025 2.89508,-0.36508 3.59258,-1.28008 4.3525,-1.4725 8.93007,-4.14265 13.20507,-4.99765 3.145,-0.3625 6.83235,-1.06742 9.51485,-1.96992 4.22,-0.76 8.76508,-1.53243 12.58008,-3.50743 2.74,-1.03 5.61265,-2.44007 7.52265,-4.71757 1.73,-0.775 2.73242,-2.82243 3.71992,-4.31993 0.28,-1.64718 -0.55321,-2.19134 -1.70039,-2.16914 z M 235.5666,780.00688 c -1.255,0.055 -2.5825,0.88992 -3.45,1.69492 -0.6125,0.115 -1.25516,0.3775 -1.52266,0.9875 -2.9925,1.6375 -5.605,4.70258 -6.4625,8.04258 -2.3675,4.235 -2.10234,10.02507 -1.01484,14.83007 0.2525,1.995 0.84,4.15743 1.975,5.83243 0.59,1.85 1.67984,3.47765 2.77734,5.06015 0.9725,-1.9125 2.27281,-3.72258 3.10781,-5.64258 2.385,-1.965 4.09227,-4.89773 6.30977,-7.14023 2.8825,-2.2075 5.57492,-4.89492 9.21992,-5.79492 -1.2175,-1.535 -3.23469,-2.93977 -4.66719,-4.48477 -1.225,-1.6125 -2.34781,-3.58265 -3.80781,-4.92265 -0.9425,-2.775 -2.52984,-5.42 -2.46484,-8.4625 z m 255.31405,0.16289 c -0.10606,-0.004 -0.2093,-10e-4 -0.30898,0.007 0.0176,0.285 0.0399,0.57242 0.0699,0.85742 -0.6475,2.9625 -1.81758,5.74781 -3.31758,8.37031 -2.1225,2.5475 -4.2075,5.19969 -6.5125,7.57969 -2.8575,0.8175 1.0975,1.78781 2.3625,2.08281 6.77,4.0475 11.44501,10.65234 15.43751,17.30234 0.49,-0.185 0.485,-0.98242 0.725,-1.43242 2.03,-3.005 3.36258,-6.76515 3.89258,-10.37265 1.3525,-5.19 0.71508,-11.36258 -2.18242,-15.88008 -1.2275,-2.275 -2.87742,-4.61742 -5.28242,-5.73242 -1.04766,-1.37344 -3.2928,-2.72915 -4.88361,-2.78204 z m -95.93438,7.12617 c -0.25502,-0.0124 -0.54656,0.0686 -0.86952,0.27578 -4.5875,4.365 -8.42,9.49258 -13,13.85508 -4.4875,-4.6 -11.43524,-5.06235 -17.50274,-5.02735 -6.3675,-0.1 -13.70242,0.21258 -18.50741,5.01758 -4.2425,-4.335 -8.27,-8.92515 -12.425,-13.36015 -0.69,-1.105 -3.13743,-0.85493 -2.15743,0.88007 3.485,5.6175 9.23743,9.62008 12.13243,15.65508 0.555,1.015 -1.18008,0.50227 -1.64258,1.09727 -11.2675,2.6075 -21.80742,8.77 -30.15742,16.7125 -2.08,1.41 -3.8625,3.36773 -5.4,5.34023 -2.685,1.845 -4.91766,4.38727 -6.76016,7.02227 -4.605,4.5825 -9.00719,9.96742 -12.32969,15.65742 -2.0275,2.7275 -4.51523,7.10766 -2.74023,10.21016 1.63,3.785 5.76758,5.76484 9.09258,7.92734 10.3475,5.4325 21.45507,9.40016 32.66757,12.56016 9.7075,3.43 20.09485,6.13514 30.32734,8.19764 3.1225,0.345 6.33,1.31994 9.45,0.53244 2.075,-0.0176 4.16742,-0.4475 6.15742,-0.95 12.2,-2.57 24.26258,-5.91758 36.04258,-10.00508 6.5525,-2.0075 13.55516,-4.06758 19.43516,-7.26758 l 0.19492,-0.0398 c 5.525,-2.09002 11.63734,-4.38766 15.12734,-9.43516 3.0325,-4.7575 -0.66984,-10.34742 -3.55234,-14.19492 -4.2775,-6.525 -9.67984,-12.31735 -15.18984,-17.81485 -0.765,-1.615 -2.40532,-2.67765 -3.79532,-3.69765 -1.7325,-2.215 -4.07742,-4.02266 -6.26992,-5.73516 -8.1575,-8.04 -18.87258,-12.40242 -29.41758,-16.35742 2.1375,-5.955 7.91774,-9.64227 11.90274,-14.28477 0.7089,-0.90797 0.29218,-2.7173 -0.8129,-2.77109 z m -225.81953,7.89844 c -0.63,0.5225 -1.4328,1.34234 -0.8203,2.18984 4.835,8.075 10.4603,15.64008 16.2203,23.08008 1.3825,1.44 4.5672,1.56515 5.3047,-0.60235 1.4,-2.965 -1.1625,-5.84742 -2.8875,-8.06992 -5.4825,-5.995 -11.8522,-11.10765 -17.8172,-16.59765 z m 387.65314,0.0176 c -0.0418,-2e-4 -0.0843,10e-4 -0.12812,0.005 -3.1025,3.495 -6.90258,6.30234 -10.04258,9.72734 -2.335,1.3325 -4.10742,3.65016 -5.80742,5.68516 -2.47,2.4 -5.73508,5.65226 -4.43008,9.40976 1.4075,2.3525 4.85734,1.69492 6.13984,-0.45508 5.615,-6.7725 10.29508,-14.28218 15.15508,-21.60468 0.71446,-0.90336 0.4082,-2.75929 -0.88672,-2.76758 z m -84.29845,9.39257 c -1.30068,0.0329 -2.6489,0.62899 -3.41718,1.59493 -0.6875,0.095 -1.2725,0.46734 -1.7375,0.96484 -2.5875,1.1175 -5.16782,2.39773 -7.73282,3.50273 -0.13,0.055 -0.39226,0.16727 -0.52226,0.22227 -4.36,1.39 -8.81274,2.50266 -13.32774,3.28516 -2.7375,0.2725 -5.55992,0.76 -8.15742,1.4625 -2.465,0.555 -4.90258,2.21984 -6.43008,4.08984 -3.585,2.025 2.10258,5.28523 3.21758,7.15273 3.59,4.76 7.65492,9.40219 12.46992,13.00469 1.9475,1.835 4.71,0.45774 6.9875,0.27774 8.775,-2.17 17.2875,-5.46493 25.4625,-9.26993 4.165,-1.74 8.75758,-3.67781 12.18009,-6.30781 3.9925,-0.5575 0.52016,-4.91484 -0.46485,-6.58984 -0.2375,-1.245 -0.8675,-2.6275 -1.95,-3.3125 -2.8825,-5.39 -8.65758,-9.67258 -14.89258,-9.75508 -0.5125,-0.23594 -1.09394,-0.33721 -1.68516,-0.32227 z m -220.20194,0.12696 c -1.81982,0.0236 -3.58907,0.45859 -5.16797,1.45547 -2.36,0.635 -4.565,2.32007 -6.0375,4.21757 -3.855,3.4275 -6.42,8.25719 -8.4375,12.96719 3.0375,1.6625 5.68765,4.11524 8.99765,5.24024 6.7575,3.39 14.16977,6.155 21.43477,8.55 0.89,0.5775 1.96758,0.78 2.99258,0.9875 4.56,1.285 10.67765,4.7975 14.79765,0.7625 0.6425,-0.215 1.07243,-0.74274 1.44493,-1.27774 5.6675,-4.515 9.82515,-10.75992 14.19765,-16.51992 -0.205,-1.3175 -1.22515,-2.56977 -2.53515,-2.88477 -0.94,-1.355 -3.06258,-2.11 -4.70508,-2.5 -0.9325,-1.365 -3.2925,-0.82273 -4.775,-1.22773 -4.265,-0.0525 -8.28477,-1.49492 -12.40977,-2.33242 -2.7625,-1.215 -5.76265,-1.96735 -8.53515,-3.22735 -3.00954,-2.32375 -7.25853,-4.26248 -11.26211,-4.21054 z M 197.383,822.32252 c -2.33665,0.0871 -0.51476,4.49508 -1.0789,6.2668 3.645,4.0625 9.61515,5.52266 14.61015,7.52266 2.595,1.5975 6.6,2.72476 9.825,1.98476 2.36,-0.4375 2.2175,-3.72234 0.6375,-5.00234 -2.64,-2.325 -6.22523,-3.04766 -9.41523,-4.33516 -4.525,-2.1575 -9.1025,-4.32969 -13.7125,-6.31719 -0.33797,-0.0912 -0.6243,-0.12854 -0.86602,-0.11953 z m 331.97852,0.14922 c -7.9,3.3025 -16.02976,6.26508 -23.70976,10.00508 -3.1,0.295 -2.73016,5.88508 0.47734,5.66758 5.57,0.36 11.03484,-2.67 16.17734,-4.7625 2.705,-1.205 6.065,-2.29742 7.525,-5.05742 0.0675,-1.7525 0.32008,-4.43774 -0.46992,-5.85274 z M 234.0623,838.30416 c -0.40938,4e-4 -0.8043,0.11531 -1.18555,0.34531 -1.575,0.45 -2.29023,2.53227 -3.32773,3.73477 -0.4575,0.3525 -0.99485,0.8178 -0.92735,1.4578 3.53,2.2325 7.31258,4.37986 11.50508,4.98986 l 0.2,0.007 c 2.2275,0.8325 4.90735,0.58014 6.83985,-0.83986 1.4475,-1.8225 1.72757,-5.09 -0.60743,-6.35 -2.345,-1.1725 -4.85273,-2.14008 -7.46523,-2.49257 -1.17,-0.6 -2.49227,-0.53265 -3.75977,-0.51015 -0.43875,-0.22875 -0.8625,-0.34289 -1.27187,-0.34258 z m 257.44414,0.0227 c -0.39446,10e-4 -0.80453,0.0802 -1.22735,0.25508 -4.0775,0.4225 -11.04758,0.89992 -12.14258,5.74492 -1.285,4.3225 4.61266,6.11 7.82266,4.5625 2.5725,-0.165 5.17485,-1.1825 7.37735,-2.475 1.735,-0.6675 3.46266,-1.70234 4.76016,-3.00236 -0.6225,-0.95498 -1.55516,-1.71006 -2.57266,-2.20506 -0.89172,-1.43408 -2.3082,-2.88609 -4.01758,-2.88008 z m 79.95312,2.42812 c -1.5842,0.0348 -3.04014,0.6993 -4.55546,1.1543 -1.19,-0.15 -2.47758,0.015 -3.09258,1.23008 -2.1,1.02 -4.30992,1.79022 -6.41992,2.77772 -0.265,-0.105 -1.16484,-1.02506 -0.78984,-0.33006 0.765,0.99748 -1.67266,-0.008 -0.79766,1.06484 -4.755,2.1875 -9.52242,4.41516 -14.15742,6.84766 -2.345,2.9575 0.55742,8.35734 4.64492,6.45234 9.65,-4.31 17.7175,-11.40978 26.2875,-17.47228 l 0,-1.6375 c -0.38156,-0.0694 -0.75394,-0.0951 -1.11954,-0.0871 z m -417.63046,0.0445 0,0.69256 c 0.135,0.59 0.46008,1.1047 0.98008,1.4297 1.3725,1.14 2.69234,2.38258 4.27734,3.23008 2.1475,1.78 4.23,3.76272 6.7625,4.97772 0.765,0.665 1.47742,1.43728 2.43242,1.83478 2.505,1.755 4.92016,3.78516 7.77266,4.96016 2.525,2.19 8.64,3.90726 9.075,-1.01524 1.445,-4.2375 -3.4175,-4.71984 -6.0625,-6.00234 -2.995,-1.5125 -6.09516,-2.81516 -9.22266,-4.02266 -4.025,-1.785 -8.13726,-3.38234 -12.23476,-4.97734 -1.0825,-0.8475 -2.46758,-0.94244 -3.78008,-1.10742 z m 307.74101,5.02382 c -2.0345,-0.006 -4.00422,0.2636 -5.77344,1.28124 -2.7125,1.205 -2.17274,5.9875 0.99726,6.3375 4.595,1.285 10.99282,1.50228 14.32032,-2.24022 1.08,-1.44 1.11468,-4.19 -0.63282,-5.05 -2.82624,0.28054 -5.93784,-0.31914 -8.91132,-0.32852 z m -197.11055,0.007 c -1.61763,-0.0264 -3.27871,0.20298 -4.92773,0.3289 -0.009,1.6e-4 -0.0181,-1.6e-4 -0.0269,0 -0.33232,0.006 -0.65618,0.0253 -0.9711,0.0582 -6e-4,6e-5 -0.001,-4e-5 -0.002,0 -0.83445,0.0352 -1.66315,0.0277 -2.47812,-0.0754 -2.5025,1.365 -1.97492,5.23734 0.29258,6.52734 3.275,1.7625 7.30742,1.85734 10.83242,1.15234 0.395,0.0475 0.86266,0.21782 1.18516,-0.11718 4.645,0.15 4.98,-7.15274 0.225,-7.34024 -0.3525,-0.045 -1.06024,-0.12976 -1.41524,-0.17226 -0.88375,-0.24812 -1.79199,-0.34664 -2.71445,-0.36172 z m 262.73634,9.7078 c -1.101,-0.006 -2.40742,0.23984 -3.2168,0.3789 -4.4425,0.007 -9.10234,0.30736 -13.21484,2.15236 -2.73,0.8125 -3.3975,4.89742 -1.1625,6.58242 4.7525,2.9875 10.7525,0.64508 15.975,0.89258 3.5175,0.01 8.37242,-1.0525 8.94492,-5.1875 0.21,-3.04 -3.02758,-4.73266 -5.71758,-4.46016 -0.36094,-0.26156 -0.9476,-0.35518 -1.6082,-0.3586 z m -328.45352,0.14648 c -2.20884,-0.0234 -4.33282,0.3168 -5.90313,1.7172 -1.055,0.4 -1.10758,1.7775 -1.03008,2.7125 0.0425,2.6075 2.65477,3.82016 4.78477,4.52266 5.6375,1.46 12.34031,2.08756 17.70781,1.03006 l 0.21485,-0.0124 c 2.4175,0.0124 4.28765,-3.18772 3.09765,-4.87772 -0.7175,-2.29 -3.39781,-3.18758 -5.54531,-3.63008 -1.95,-0.6775 -4.08977,-1.00242 -6.17227,-0.99492 -2.03867,0.0531 -4.65094,-0.44062 -7.15429,-0.4672 z m 296.55156,4.97736 c -4.94751,0.225 -10.21493,0.26506 -14.64493,2.79256 -1.4675,1.2825 -2.76,3.81978 -1.55,5.65978 1.9075,2.5925 6.075,2.18758 8.8125,1.71758 4.57001,0.0425 9.69759,-0.97508 12.88009,-4.53008 0.135,-0.9575 -0.82484,-1.615 -1.43984,-2.175 -0.965,-1.425 -2.10782,-3.50734 -4.05782,-3.46484 z m -264.42969,0.0375 c -1.86,0.74 -2.99765,2.91234 -4.01015,4.50234 -3.06,1.5025 1.04757,3.72272 2.76757,4.16522 2.415,1.135 5.17,1.62736 7.8375,1.50236 1.69,0.62 3.93258,0.38508 5.69258,-0.02 l 0.2,0.025 c 3.025,0.6025 5.175,-3.5175 3.2375,-5.4125 -0.15,-1.4125 -1.67523,-2.42492 -3.01523,-2.54492 -3.645,-1.9075 -8.54477,-1.32008 -12.70977,-2.21758 z m 237.33046,3.56328 c -0.749,0.007 -1.5989,0.18944 -1.60312,0.37928 -0.4,-0.005 -0.80508,-0.0351 -1.19258,0.0574 -7.295,0.8525 -15.65742,1.11242 -21.79492,5.50742 -2.9525,3.615 2.44234,4.63008 5.02734,3.88008 0.285,0.075 0.57008,0.0824 0.85508,0.02 3.6275,0.1825 7.31008,-0.0249 10.89258,-0.51486 l 0.20234,0.0449 c 3.6275,-0.2825 7.32266,-0.59764 10.83516,-1.58514 0.5625,-0.8875 0.615,-1.97508 0.5875,-2.99258 0.2775,-1.7125 -0.42484,-4.695 -2.68984,-4.4125 -0.0154,-0.28766 -0.53698,-0.38906 -1.11954,-0.384 z m -208.99335,0.32966 c -1.16392,-0.007 -2.32242,0.0118 -3.46992,0.0496 -1.6,2.2875 -2.84742,6.5497 0.48008,7.9422 6.86,0.9025 13.78758,1.7475 20.71758,1.5 1.71,0.0625 3.95992,0.5628 5.38242,-0.4547 1.555,-0.02 1.18258,-2.2878 0.20508,-2.9328 -6.755,-4.74906 -15.16776,-6.05474 -23.31524,-6.1043 z m 32.20508,14.71718 c -1.73808,-0.0307 -3.2325,0.40478 -3.65469,2.05742 -1.18,1.9 -0.77015,6.64994 1.97735,6.44494 3.745,0.745 7.64757,0.21992 11.44257,0.26992 2.475,0.0825 9.27258,1.82742 7.69258,-2.89258 -2.755,-3.235 -7.20281,-4.58478 -11.30781,-5.04728 -1.27828,0.0168 -3.91533,-0.79298 -6.15,-0.83242 z m 145.11093,0.42656 c -0.1105,-0.002 -0.225,0.002 -0.34336,0.0106 -5.94,0.215 -12.38742,0.82282 -17.65742,3.82032 -2.805,1.375 -1.1125,5.86718 1.9,4.57968 0.2775,0.0625 0.55508,0.0525 0.83008,-0.0375 3.3625,-0.0475 6.91,0.42016 10.1625,-0.27734 2.035,-0.3125 5.85742,1.42 6.63242,-0.9875 1.58876,-1.55242 1.9012,-7.03952 -1.52422,-7.1082 z m 11.72032,1.359 c -2.41702,-0.0325 -4.0532,2.53374 -3.61368,4.87186 l -0.0801,0.1875 c -0.025,1.0575 0.59524,2.16986 1.70274,2.36486 5.16,1.2275 10.49992,1.4975 15.78242,1.6375 3.0425,0.145 6.82984,-3.31236 4.98984,-6.42736 -5.4825,-2.91 -12.07492,-1.4075 -18.00742,-2.5375 -0.26532,-0.0621 -0.5238,-0.0935 -0.77382,-0.0969 z m -173.79453,0.125 c -4.51887,-0.0459 -9.45274,1.53664 -13.93399,1.76914 -3.645,0.325 -1.26492,5.63022 1.11758,6.15272 2.7225,2.1525 7.51235,0.455 10.85235,0.475 2.73,-0.0225 5.5325,-0.485 8.1125,-1.425 2.03,-1.7775 0.8925,-5.84014 -1.8,-6.27264 -1.38188,-0.4875 -2.84215,-0.68392 -4.34844,-0.69922 z m 204.58163,4.2082 c -0.25938,0.016 -0.3607,0.48992 -0.46836,0.70116 -1.305,1.01 -1.85242,2.6772 -2.75742,4.0047 -0.3325,0.385 -0.77242,0.725 -0.90742,1.2375 4.6975,3.845 9.07984,8.0875 13.68984,12.025 1.1575,1.2475 2.20016,2.71766 3.74767,3.51016 1.195,1.5425 2.85758,2.70014 4.48008,3.76014 1.6825,1.6325 3.76992,3.02744 6.00742,3.76994 0.14,0.0425 0.4225,0.12742 0.5625,0.16992 1.245,1.1175 3.76008,1.04508 5.24258,0.0926 2.535,-4.9725 -3.31774,-9.015 -6.61524,-11.725 -1.94,-2.465 -4.65242,-4.4275 -7.15742,-6.3375 -4.67251,-4.385 -10.10009,-7.905 -15.61759,-11.1375 -0.0787,-0.0539 -0.14678,-0.0748 -0.20664,-0.0711 z m -232.11054,0.0684 c -8.0075,4.4075 -15.0975,10.2728 -21.775,16.4703 -2.7925,2.97 -6.54031,5.31978 -8.02031,9.29728 -0.18,2.745 2.8625,5.37508 5.4375,3.64258 11.125,-5.8725 19.04258,-16.06986 29.00508,-23.55236 -1.305,-1.975 -2.81477,-4.6453 -4.64727,-5.8578 z m 160.5078,1.57852 c -1.46854,-0.0266 -3.066,0.50874 -4.05546,1.13164 -3.295,0.79 -6.17992,3.12514 -8.24492,5.74764 -2.0125,2.535 -0.84008,7.97986 2.88242,7.87736 2.52,0.705 5.59734,-0.6225 7.55234,-2.1875 0.7,-0.1175 1.17008,-0.67016 1.54258,-1.23516 2.945,-1.91 4.53274,-6.2025 3.40274,-9.625 -0.58828,-1.22462 -1.7839,-1.6855 -3.0797,-1.70898 z m -88.32733,0.11914 c -0.70084,0.004 -1.37234,0.1253 -1.9832,0.39492 -2.7075,1.28 -2.07992,5.56742 -0.51992,7.54492 0.4325,1.5775 1.74492,2.79274 2.99492,3.76524 2.86,2.95998 8.0125,4.4275 11.5875,1.8625 2.3375,-2.83 1.02008,-7.18494 -2.14492,-8.79494 -0.7175,-0.8375 -1.72258,-1.41 -2.73008,-1.8 -1.82422,-1.51366 -4.7013,-2.9879 -7.2043,-2.97264 z m 63.56327,8.33514 c -0.2847,0.004 -0.58444,0.0426 -0.89882,0.11994 -2.26,0.0275 -4.85766,0.1 -6.91016,0.4875 -6.0275,0.42248 -12.04258,0.96492 -18.08008,0.55742 -0.145,-0.01 -0.43742,-0.0299 -0.58242,-0.0399 -2.41998,-0.635 -5.13726,-0.2703 -7.64726,-0.4953 -0.165,0.02 -0.49258,0.0628 -0.65508,0.0828 -5.07,-2.635 -10.21507,3.47478 -6.49257,7.88478 8.78999,2.06 18.08265,3.01008 27.07265,2.08008 2.9175,-0.4 5.91484,-0.50758 8.77734,-1.10508 2.15,-0.1175 4.29734,-0.37734 6.40234,-0.83984 4.1625,-1.08986 3.28468,-8.7934 -0.98594,-8.73244 z m 46.95196,3.1875 c -0.8403,0.0142 -1.62046,0.15368 -2.23828,0.42228 -1.3925,0.23 -4.82992,1.2675 -3.30742,3.025 1.6225,2.55 0.12492,5.43758 0.25742,8.16758 -0.7375,3.2575 5.67984,3.99758 7.48984,2.83008 2.935,-1.16502 3.62,-5.10266 3.7375,-7.91016 2.46798,-4.30828 -2.2978,-6.59652 -5.93906,-6.53478 z m -133.71757,0.032 c -1.97969,0.004 -3.91328,0.62304 -5.45313,2.0879 -0.2275,4.3925 0.5775,9.06506 2.9875,12.84256 1.7775,-0.29 3.63242,-0.285 5.35742,-0.8125 2.4525,0.06 4.69,-1.8675 2.975,-4.5375 -0.002,-2.5375 0.16477,-5.0575 0.53477,-7.5625 -1.85539,-1.2378 -4.15791,-2.0227 -6.40156,-2.01796 z m 118.36249,2.03516 c -0.76508,-0.003 -1.5171,0.11774 -2.16836,0.35274 -4.5975,0.345 -4.23508,6.94492 -0.49258,8.53242 3.18,2.3575 8.71508,-1.4825 7.54258,-5.2625 -0.1725,-2.49188 -2.5864,-3.61388 -4.88164,-3.62266 z m -101.92577,0.0539 c -0.63739,0.006 -1.26172,0.0713 -1.82735,0.16876 -4.2225,0.7325 -4.48031,7.96734 -0.44531,9.21484 3.8775,1.2675 8.96,-3.09726 7.125,-7.13476 -0.91125,-1.75688 -2.9402,-2.2677 -4.85234,-2.24884 z m 133.02499,4.85626 c -3.03,1.2425 -5.36008,4.34264 -6.23008,7.44764 -3.5275,4.6425 2.95766,8.8347 7.26016,8.2297 1.175,0.135 2.43492,-0.045 3.45742,-0.6922 1.4975,-0.57 4.51492,-1.6425 3.46992,-3.725 -0.7075,-1.745 -1.55984,-3.7403 -2.76484,-4.9953 -1.07,-2.4075 -2.53758,-5.39984 -5.19258,-6.26484 z m -164.52265,0.14844 c -0.60942,0.0279 -1.19836,0.2725 -1.72227,0.80898 -1.19,0.7925 -2.16,2.12772 -2.4875,3.54022 -1.4375,2.665 -4.01742,5.84494 -3.21992,9.09494 3.2725,3.81746 9.62977,2.14996 13.12227,-0.6625 2.385,-1.67 1.45515,-5.3925 0.0102,-7.175 -0.045,-0.385 -0.0977,-0.80758 -0.44024,-1.04258 -0.65039,-2 -3.08599,-4.66382 -5.2625,-4.56406 z m -65.74648,12.44178 c -0.45299,-0.008 -0.90805,0.0652 -1.33321,0.2297 -0.615,0.1475 -1.45023,0.205 -1.67773,0.925 -2.6775,5.35752 -2.15992,11.49012 -2.69492,17.28012 0.06,3.955 -0.58235,8.3249 1.23515,11.9949 3.28,-8.6375 5.26242,-17.7524 7.64492,-26.6774 0.71297,-2.1693 -1.21128,-3.71844 -3.17421,-3.75232 z m 296.24024,0.0543 c -1.4881,-0.0182 -3.05314,0.7168 -3.01094,2.33552 0.4,3.225 1.20218,6.8151 2.27968,9.7301 1.26,5.7525 2.755,11.4974 4.25,17.2024 2.52,2.54 2.03016,-4.0175 2.23516,-5.1875 0.6625,-0.315 0.33242,-2.7775 -0.005,-3.0075 -0.5075,-6.5225 0.68492,-14.8875 -3.51758,-20.25504 -0.47344,-0.525 -1.3384,-0.80704 -2.23124,-0.81798 z m -235.23634,8.87382 c -1.1823,-0.035 -2.22164,0.8563 -3.01992,1.6992 -1.2375,0.825 -2.22469,2.1398 -2.70469,3.5098 -1.9275,2.165 -2.69281,5.6201 -2.72031,8.5176 -0.7425,3.1775 -0.17969,7.8926 3.14531,9.5176 2.5475,0.7825 5.37492,1.3401 8.00742,0.6851 2.6325,0.2075 3.64258,-2.8576 4.48008,-4.8051 1.3025,-1.67 1.77992,-4.3274 2.29492,-6.4074 1.195,-2.835 1.69485,-6.125 1.96485,-9.2 2.43,-5.4525 -5.34242,-1.795 -8.23242,-3.0625 -0.5725,-0.57 -1.6725,-0.1353 -2.375,-0.2703 -0.28688,-0.1186 -0.5674,-0.1759 -0.84024,-0.184 z m 172.64609,0.068 c -3.39484,0.052 -6.9464,0.9312 -10.36094,0.6387 0.005,1.9175 0.56774,3.7999 1.01524,5.6449 1.0375,4.5425 1.90742,9.6027 4.21992,13.5652 0.3675,4.2475 5.32,4.6322 8.6,4.2297 2.16,0.1875 4.8075,-0.5223 5.4125,-2.9098 0.165,-0.2025 0.21258,-0.4349 0.14258,-0.6949 2.005,-7.1125 0.0672,-16.4277 -6.70782,-20.3527 -0.76312,-0.1008 -1.53806,-0.1331 -2.32148,-0.1211 z m 9.7543,25.4285 c -2.9225,1.0975 -5.64758,3.0601 -8.64258,4.2051 -2.4975,1.1825 -7.00758,0.7302 -6.50508,4.5277 0.12,4.515 -3.77258,10.0224 0.19492,13.7649 2.2175,3.2475 5.42492,5.895 9.15742,7.2 l 1.51524,0 c 0.575,-0.155 1.11492,-0.415 1.63242,-0.7125 l 0.16758,-0.093 c 1.525,-0.57 2.74758,-1.7126 3.33008,-3.2301 1.8575,-2.475 2.81976,-5.4899 3.50976,-8.4699 1.23,-5.775 -0.0773,-12.9376 -4.35976,-17.1926 z m -190.23281,0.078 c -1.4125,0.89 -2.17484,2.4225 -2.98984,3.82 -3.3325,6.79 -2.73516,15.8276 1.51484,22.0976 1.1125,1.88 2.94016,3.2949 5.11016,3.7024 l 1.27734,0 c 0.69,-0.125 1.38016,-0.2927 1.94766,-0.7227 4.88,-1.7925 9.77015,-6.5522 8.89765,-12.1672 -0.515,-3.41 -0.94265,-6.8326 -1.52265,-10.2301 -0.035,-0.685 -0.90243,-0.5126 -1.36993,-0.7101 -4.5925,-1.17 -8.97023,-3.0799 -12.86523,-5.7899 z"
                 inkscape:connector-curvature="0" />
            </g>
          </g>
        </svg>
        
        `
    },
    "Leo": {
        "Aries": [98, `<h3>When Aries and Leo come together in a love affair, the sparks will fly! Both are Fire Signs, passionate and dynamic, with a healthy love of sportsmanship and competition.</h3>
        <p>There is a lot of action in this relationship. Both Signs want to be the boss and problems can arise when their equally-large egos get in the way. These partners have genuine admiration and respect for each other, but they need to learn to take turns commanding and giving orders — even when they’re only choosing a movie at the video store!.</p>`],
        "Taurus": [72, `<h3>When Taurus and Leo come together in a love affair, they can be a great couple because they know how to stroke one another’s egos and love to have their own stroked! They have similar needs: Taurus needs plenty of affection, to be loved and cherished, while Leo likes compliments and wants to be adored and admired.</h3>
        <p>They’re both extremely loyal and possessive lovers. Since they have such similar desires, they can generally provide for one another’s needs quite well.</p>`],
        "Gemini": [88, `<h3>When Gemini and Leo come together in a love affair, their relationship is playful and high-spirited, characterized by light activity and optimism.</h3>
        <p>Gemini thrives on mental stimulation and is therefore very attracted to Leo’s creative, dramatic spirit. There can be trouble between these two, however: If Leo takes Gemini’s flirty, outgoing nature too seriously, or if Gemini thinks Leo wants to maintain total control of the relationship, arguments may break out. Though their approaches are different — Gemini likes to analyze things from all sides in an intellectual conversation while Leo would rather not talk about it and just jump right in — they are well-matched.</p>`],
        "Cancer": [34, `<h3>When Cancer and Leo make a love match, they understand and know how to satisfy basic emotional needs within one another.</h3>
        <p>Both these Signs require dedication and tender, loving care, but while Cancer seeks stability and emotional harmony, Leo craves heartfelt compliments and sincere admiration. Both are strongly loyal, even to the point of possessiveness, Cancer for safety’s sake, Leo for the sake of their self-confidence. They are also both committed to a enduring, rewarding connection. Since their desires are similar, a Cancer and a Leo may fill very important voids in each other’s lives.</p>`],
        "Leo": [46, `<h3>When two Leos join together in a love match, they draw a great deal of attention.</h3>
        <p>Others hold their breath and take notice. Two such stunning, creative, gregarious individuals seem to deserve one another. Theirs is an unbeatable combination when it comes to socializing, heading a group, or even inspiring others in the ways of romance. This duo was instantly attracted to their fellow Lion’s good looks, and neither was shy in manifesting their desires.</p>`],
        "Virgo": [35, `<h3>When Virgo and Leo join together in a love match, they may initially overlook common interests and feel they have nothing to gain from one another.</h3>
        <p>This is a relationship that evolves over time, each partner gradually understanding and appreciating the other. Leo is extroverted, dominant, and charismatic, and often has a short fuse. Virgo is studious and withdrawn, possessed of more versatility than Leo. Although there are differences, they make a wonderful love match when each partner warms up to the other’s unfamiliar style.</p>`],
        "Libra": [98, `<h3>When Leo and Libra join together in a love match, theirs is an agreeable union.</h3>
        <p>Being situated two signs apart in the Zodiac, Leo and Libra experience a deep understanding of the inner-workings of the other. When the Lion’s unbounded energy mixes with Libra’s natural sense of harmony, this is a romance of great balance. Leo and Libra are both outlandish versus reserved, direct versus peace loving. They can enjoy a very smooth relationship because each can appreciate and benefit from the positive attributes of the other.</p>`],
        "Scorpio": [57, `<h3>When Leo and Scorpio join together in a love match, the result is usually a dynamic and intense union.</h3>
        <p>They are well tuned in to one another’s needs; Scorpio demands respect and to be wanted while Leo needs to be adored and complimented constantly. They are both extremely loyal, and often possessive of one another. Both members of this love match are able to give the other what they need and while enjoying one another’s strengths.</p>`],
        "Sagittarius": [94, `<h3>When Leo and Sagittarius join together in a love match, the result is often fireworks! Both Signs are extremely dynamic and enjoy life to the fullest.</
        This couple is full of life and fun to be around, with each person encouraging the other to aim high! Sagittarius’s philosophical tendency warrants a distraction to Leo’s obsession with the larger-than-life. The two will have genuine admiration and respect for one another. Both are warm, charismatic and charming; people enjoy being in the energy this couple radiates.`],
        "Capricorn": [35, `<h3>When Leo and Capricorn join together in a love match, they form a mutually supportive union.</h3>
        <p>Capricorn is more conservative, hard working and traditional in outlook. Leo is a firm believer in hard work, but tends to get things done through their charm and social skills. However, both are extremely devoted, especially to teach other. Although they may seem to be an unlikely couple on the surface, their love will grow as they discover similarities.</p>`],
        "Aquarius": [68, `<h3>When Leo and Aquarius join together in a love match, the merging of Aquarian foresight and Leo creativity causes people to take notice.</h3>
        <p>This partnership is energetic and unstoppable, and although occasional competitions may occur, there is never a dull moment for these two. Their Signs are congenial and have a good relationship. Both tend to be idealistic and highly motivated. Both are attracted to all things novel, and are thrill-seekers; they may even occasionally turn life into a giant game of Truth or Dare.</p>`],
        "Pisces": [37, `<h3>When Leo and Pisces join together in a love match, each partner enjoys the new perspective the other brings to life in general.</h3>
        <p>Leo is a strong and assertive Sign, being free to do what they want and taking command of their surroundings. Pisces is quieter and more reserved and introspective. In many ways the two are polar opposites, yet both are dreamers at heart. When they care for one another, they each fill the other’s voids and have a caring, mutually beneficial relationship.</p>`],
        "svg": `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
        <!-- Created with Inkscape (http://www.inkscape.org/) -->
        
        <svg
           xmlns:dc="http://purl.org/dc/elements/1.1/"
           xmlns:cc="http://creativecommons.org/ns#"
           xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
           xmlns:svg="http://www.w3.org/2000/svg"
           xmlns="http://www.w3.org/2000/svg"
           xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
           xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
           width="50.86133mm"
           height="50.86133mm"
           viewBox="0 0 718.79998 718.79998"
           id="svg2"
           version="1.1"
           inkscape:version="0.91 r13725"
           sodipodi:docname="LeoDrawing5.svg">
          <defs
             id="defs4">
            <filter
               inkscape:label="Modified combined Lighting"
               inkscape:menu="Bevels"
               inkscape:menu-tooltip="Basic specular bevel to use for building textures"
               style="color-interpolation-filters:sRGB"
               id="filter125483"
               height="1.04"
               width="1.04"
               y="-0.02"
               x="-0.02">
              <feGaussianBlur
                 stdDeviation="6"
                 in="SourceGraphic"
                 result="result0"
                 id="feGaussianBlur125485" />
              <feDiffuseLighting
                 lighting-color="#ffffff"
                 diffuseConstant="1"
                 surfaceScale="4"
                 result="result5"
                 id="feDiffuseLighting125487">
                <feDistantLight
                   elevation="45"
                   azimuth="235"
                   id="feDistantLight125489" />
              </feDiffuseLighting>
              <feComposite
                 k1="1.4"
                 in2="SourceGraphic"
                 in="result5"
                 result="fbSourceGraphic"
                 operator="arithmetic"
                 id="feComposite125491"
                 k2="0"
                 k3="0"
                 k4="0" />
              <feGaussianBlur
                 result="result0"
                 in="fbSourceGraphic"
                 stdDeviation="6"
                 id="feGaussianBlur125493" />
              <feSpecularLighting
                 specularExponent="25"
                 specularConstant="1"
                 surfaceScale="4"
                 lighting-color="#ffffff"
                 result="result1"
                 in="result0"
                 id="feSpecularLighting125495">
                <feDistantLight
                   azimuth="235"
                   elevation="45"
                   id="feDistantLight125497" />
              </feSpecularLighting>
              <feComposite
                 k3="1"
                 k2="1"
                 operator="arithmetic"
                 in="fbSourceGraphic"
                 in2="result1"
                 result="result4"
                 id="feComposite125499"
                 k1="0"
                 k4="0" />
              <feComposite
                 operator="in"
                 result="fbSourceGraphic"
                 in2="SourceGraphic"
                 in="result4"
                 id="feComposite125501" />
              <feColorMatrix
                 result="fbSourceGraphicAlpha"
                 in="fbSourceGraphic"
                 values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
                 id="feColorMatrix125639" />
              <feGaussianBlur
                 id="feGaussianBlur125641"
                 stdDeviation="1.1000000000000001 1.1299999999999999"
                 result="blur"
                 in="fbSourceGraphic" />
              <feColorMatrix
                 id="feColorMatrix125643"
                 values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 50 0 "
                 result="colormatrix" />
              <feComposite
                 id="feComposite125645"
                 in2="fbSourceGraphic"
                 in="colormatrix"
                 operator="in" />
            </filter>
            <filter
               inkscape:collect="always"
               style="color-interpolation-filters:sRGB"
               id="filter126633"
               x="-0.099000007"
               width="1.198"
               y="-0.099000007"
               height="1.198">
              <feGaussianBlur
                 inkscape:collect="always"
                 stdDeviation="2.4750002"
                 id="feGaussianBlur126635" />
            </filter>
          </defs>
          <sodipodi:namedview
             id="base"
             pagecolor="#ffffff"
             bordercolor="#666666"
             borderopacity="1.0"
             inkscape:pageopacity="0.0"
             inkscape:pageshadow="2"
             inkscape:zoom="0.73594882"
             inkscape:cx="359.39999"
             inkscape:cy="359.39999"
             inkscape:document-units="px"
             inkscape:current-layer="layer1"
             showgrid="false"
             inkscape:window-width="1366"
             inkscape:window-height="705"
             inkscape:window-x="-8"
             inkscape:window-y="-8"
             inkscape:window-maximized="1"
             fit-margin-top="0"
             fit-margin-left="0"
             fit-margin-right="0"
             fit-margin-bottom="0" />
          <metadata
             id="metadata7">
            <rdf:RDF>
              <cc:Work
                 rdf:about="">
                <dc:format>image/svg+xml</dc:format>
                <dc:type
                   rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
                <dc:title></dc:title>
              </cc:Work>
            </rdf:RDF>
          </metadata>
          <g
             inkscape:label="Layer 1"
             inkscape:groupmode="layer"
             id="layer1"
             transform="translate(729.21106,980.99174)">
            <g
               id="g91385">
              <circle
                 transform="matrix(10,0,0,10,-3421.7007,-4530.6759)"
                 id="circle124368-5"
                 r="30"
                 cy="390.90842"
                 cx="305.18896"
                 style="fill:#000000;fill-opacity:1;stroke:none;stroke-opacity:1;filter:url(#filter126633)" />
              <circle
                 transform="matrix(10,0,0,10,-3421.7007,-4530.6759)"
                 id="circle124368"
                 r="30"
                 cy="388.90842"
                 cx="303.189"
                 style="fill:#fcff00;fill-opacity:1;stroke:none;stroke-opacity:1;filter:url(#filter125483)" />
              <path
                 style="opacity:0.7"
                 id="path4"
                 d="m -437.27468,-826.52818 c -11.3975,0.18 -25.01016,3.82516 -29.54766,15.54766 -2.485,5.975 -2.71,12.71478 -1.8625,19.05978 l 0.0324,0.20742 c -0.0925,0.845 0.84266,2.18272 -0.22734,2.61522 -15.5225,8.8275 -27.97,23.31508 -32.9375,40.61758 4.725,-5.755 11.14258,-10.95008 18.98008,-11.05508 l 0.225,0.005 c 6.445,-0.465 12.10226,4.07728 14.38476,9.85978 3.84,9.5125 3.73492,20.08022 2.83242,30.14022 -0.0525,1.575 -0.42992,3.3847 0.54258,4.7672 2.3375,-1.42 4.20492,-3.515 5.99492,-5.5625 1.515,-1.305 3.35266,-2.14234 5.04766,-3.17734 0.84,-0.265 1.65484,-0.59994 2.42734,-1.01994 6.955,-1.65 13.8175,-5.50756 16.4625,-12.55506 3.58,-9.625 15.16782,-13.4425 24.57032,-11.475 7.9475,1.325 13.22468,7.88234 20.02968,11.50234 2.2475,1.0125 3.95032,-1.73984 3.19532,-3.71484 -1.09,-11.44 -3.80024,-23.45244 -11.29024,-32.48244 -3.445,-4.7375 -8.05242,-8.71008 -13.15742,-11.58008 -2.5275,-1.65 -5.21008,-3.0525 -7.99258,-4.2125 -4.86,-2.0925 -10.09992,-3.44492 -15.36992,-3.90742 -0.15,-0.0176 -0.45234,-0.055 -0.60234,-0.075 -5.915,-1.1175 -11.83258,0.0399 -17.66758,1.00236 -0.165,0.005 -0.49024,0.0174 -0.65274,0.025 -3.6375,0.015 -7.33484,-1.74258 -8.78984,-5.24258 l -0.0477,-0.19728 c -1.5375,-5.51 -0.007,-11.30764 3.34532,-15.79764 0.49,-0.345 0.97234,-0.71978 1.26484,-1.25978 0.245,-0.255 0.4925,-0.51266 0.7375,-0.77266 6.1375,-4.8225 13.88016,-7.13514 21.57266,-7.69764 0.1125,-0.008 0.33476,-0.0198 0.44726,-0.0274 2.245,-0.1125 4.48774,0.0324 6.72774,0.17736 l 0.20742,0.0203 c 11.465,1.6075 21.64758,7.38984 31.58008,12.96484 10.9225,7.1525 21.21234,15.25986 31.48984,23.28986 1.0925,1.3025 2.48242,2.32758 3.88242,3.28008 4.21,3.5675 8.385,7.2225 12.8375,10.475 3.115,2.715 6.17492,5.57756 9.69492,7.76756 7.255,5.75 14.07774,12.29258 22.52774,16.29258 10.84,6.4825 24.05476,9.16992 36.52226,6.90742 14.8975,-2.21 28.36508,-15.78242 26.96758,-31.41992 0.3775,-5.77 -1.77226,-11.70992 -4.72226,-16.56992 -1.32,-3.61 -3.71266,-6.71522 -5.97266,-9.77772 -2.8325,-4.155 -5.81516,-8.33244 -9.29766,-11.94494 1.9775,3.79 3.14008,7.91766 3.79258,12.13516 1.0375,8.5425 -3.41742,16.74 -9.59492,22.3 -6.995,6.795 -13.63734,14.0475 -20.85234,20.55 -5.515,-0.965 -10.735,-3.435 -16.1625,-4.8875 -17.1025,-6.8425 -30.82524,-19.68758 -45.71524,-30.08008 -4.22,-3.5075 -8.76242,-6.66742 -13.44492,-9.51992 -5.56,-3.9425 -11.39734,-7.64 -17.47734,-10.7125 -0.1375,-0.065 -0.4125,-0.1928 -0.55,-0.2578 -9.2075,-5.3075 -19.05258,-9.95242 -29.41758,-12.46992 -0.86,-0.3075 -1.87266,0.10756 -2.58516,-0.56994 -2.9525,-1.1275 -6.30234,-0.82 -9.36484,-1.4875 l -3.01992,0 z m -47.2711,73.0754 c -3.24512,0.0483 -6.91382,1.9682 -9.06914,3.93204 -0.0675,0.06 -0.205,0.17514 -0.275,0.23514 -5.065,3.4975 -8.56226,8.84242 -12.47226,13.51992 -5.035,8.5725 -10.86258,16.68744 -15.53008,25.46994 -3.34001,5.34 -6.26251,11.355 -7.18751,17.6375 -1.435,4.525 0.16234,11.90014 6.30235,11.08514 4.7475,0.35 9.28774,-2.42764 12.62774,-5.49764 2.715,-2.1525 5.53218,-4.61758 7.44218,-7.49258 2.6375,-2.61 5.61532,-5.2575 7.79532,-8.25 2.27,-1.9725 4.05234,-4.815 5.22734,-7.55 4.1475,-5.715 7.00258,-13.045 9.03008,-19.975 1.4075,-2.65 2.0575,-6.25728 2.55,-9.38478 l -0.0102,-0.19492 c 0.6625,-3.17 0.78992,-7.015 -0.79258,-9.975 -0.0475,-0.1125 -0.14468,-0.3353 -0.19218,-0.4453 -1.20352,-2.30446 -3.22574,-3.14752 -5.4461,-3.11446 z m 71.38438,11.92382 c -6.19016,-0.0148 -12.79218,2.11798 -17.2336,6.48322 -1.5775,0.7475 -2.48726,2.36514 -3.62226,3.62264 -4.8425,4.635 -3.48742,13.09992 -9.11992,17.13242 -2.9775,2.1175 -6.14024,-0.0649 -9.02774,-0.96992 -4.9925,-3.98 -9.17476,4.195 -11.20976,7.975 -4.1575,6.715 -7.89508,14.015 -10.04258,21.7125 -6.7425,18.2225 -10.24016,37.715 -9.81016,57.1375 0.3575,6.91 0.31258,14.25508 3.36758,20.64258 2.135,5.9775 10.81984,3.52726 11.93984,-1.80274 0.665,-10.63 1.55282,-21.31742 4.02032,-31.70742 4.1825,-12.9075 8.11484,-25.97757 14.02734,-38.23006 6.3225,-12.295 11.35516,-25.94728 21.66016,-35.58478 3.065,-3.1825 10.02234,-5.5603 13.26484,-2.4828 -13.525,3.645 -21.40242,18.3003 -20.70742,31.6953 -5.04,1.4525 -8.22008,6.08984 -10.66758,10.42734 -7.1275,13.625 -10.5675,29.20016 -9.6625,44.56016 0.4,5.6925 2.28992,11.89976 7.20742,15.29726 5.07,3.39 11.69516,3.95016 17.44766,2.13516 7.695,-2.0575 15.4625,-5.92992 23.4625,-4.88242 -5.62,2.7125 -11.56742,4.8275 -16.78242,8.3125 -4.67,3.0425 -9.65258,5.76 -15.06758,7.1875 -7.6525,1.715 -15.2,-2.31758 -20.85,-6.84258 -1.4075,7.875 -0.0725,15.97226 1.0625,23.82226 1.8025,14.6275 10.6025,28.56032 23.75,35.49532 11.7525,6.22 26.74234,0.84976 34.27734,-9.49024 7.5925,-8.6825 10.82492,-23.16258 23.53242,-25.90508 -9.1875,8.78 -13.74,21.36766 -19.2,32.73516 -6.1425,10.8375 -19.85992,13.21766 -31.00742,12.97266 7.6525,2.4875 15.64758,4.86734 23.79258,3.55234 17.5325,-1.8125 31.935,-13.5025 43.75,-25.725 -5.65,12.79 -15.76234,24.10508 -28.97734,29.25508 -6.6425,2.7225 -13.80774,3.87492 -20.94024,4.30742 -3.6575,0.06 -7.61258,-0.38492 -11.10508,-0.18242 1.4025,1.045 2.62274,2.4175 4.25274,3.1 11.87,8.9275 26.90726,15.02742 42.02226,13.51992 -1.2975,-10.665 3.72516,-20.85516 8.89766,-29.86016 5.395,-7.425 10.81766,-15.0025 17.32266,-21.4375 -0.775,-2.0325 -2.27024,-3.76726 -3.20274,-5.74726 -1.6725,-4.185 -1.99484,-9.00516 -0.27734,-13.23516 1.5275,-1.755 4.10758,-2.69984 6.21758,-1.40234 0.8275,13.0175 3.28242,27.32234 13.33242,36.60234 9.085,8.645 22.79,9.11258 34.425,6.79258 2.945,-0.51 6.99226,-2.75734 5.14726,-6.33984 -4.21,-1.2875 -8.655,0.805 -12.9375,-0.3375 -7.4,-1.1175 -17.42,0.7975 -21.675,-7.0875 -4.23,-8.885 -2.94492,-19.94508 1.81758,-28.39258 7.5925,2.44 15.13758,5.67508 23.13008,6.81758 3.725,-0.075 8.02,-0.50532 10.475,-3.72032 2.7175,-3.995 2.26258,-9.5125 -0.49492,-13.375 -5.285,-7.3625 -13.20992,-12.17968 -20.66992,-17.06718 0.115,-0.495 0.39742,-0.99766 0.96992,-1.01016 5.2075,-0.9525 10.38,-2.11484 15.5875,-3.07734 6.8375,1.4075 15.165,2.99218 21,-1.82032 5.43,-5.9025 1.44492,-14.36218 -1.81758,-20.34218 -6.005,-10.4175 -18.72484,-14.20781 -30.03984,-14.49531 -5.84,-0.4525 -11.68508,1.97023 -17.45508,0.52773 -6.3125,-2.835 -6.99008,-11.11758 -13.03008,-14.25508 -2.73,-1.69 -6.28008,-1.25007 -9.01758,-2.75507 4.7975,-1.88749 10.76492,-1.5025 14.71992,2.05 3.015,2.965 4.77258,7.3975 8.89258,9.1 3.03,0.1625 3.805,-3.54727 3.4125,-5.83477 -0.1875,-6.715 -6.3975,-11.70766 -12.5375,-13.07266 -0.9975,-0.825 -3.08484,-0.89256 -4.42734,-1.29256 0.5975,0.78 1.52976,1.40256 2.44726,1.71756 0.5225,1.095 3.98016,2.31 3.03516,3.075 -19.085,-7.365 -40.405,2.02758 -59.225,-6.44492 -7.5725,-3.72 -11.91242,-12.30772 -10.29492,-20.62772 1.8125,-7.1675 8.11226,-12.6497 14.78476,-15.7047 1.205,-0.2175 0.0903,-0.5778 -0.26718,-0.4828 -4.2175,0.4025 -8.82758,1.46764 -12.20508,3.79764 -11.2375,5.1375 -16.26242,19.81994 -12.00742,31.16994 2.74,7.1425 10.0825,11.16264 17.2,12.79764 14.6625,3.9225 29.91468,-0.135 44.72968,2.5125 1.7425,0.7175 3.63508,1.86235 4.43008,3.61485 -9.63,-1.065 -19.23476,0.6775 -28.84726,1.175 -13.605,1.3925 -28.52274,-0.0999 -39.76524,-8.60235 -6.9275,-4.715 -10.69258,-13.48992 -9.35508,-21.76992 0.61,-8.615 5.51532,-16.52022 12.32032,-21.67772 7.4375,-5.6125 16.39968,-8.96758 25.49218,-10.71758 7.8275,-1.675 15.81508,-0.92486 23.73008,-0.85236 0.11,0.007 0.32766,0.0226 0.43516,0.0301 1.2375,0.4975 6.025,1.13 4.1,-1.2125 -2.9875,-3.4475 -7.74266,-4.76272 -12.04766,-5.71522 -0.0975,-0.003 -0.29742,-0.002 -0.39492,-0.005 -6.03,-1.2825 -12.33992,0.52984 -18.08242,2.45234 -3.525,-0.9025 -5.53992,-4.33242 -8.23242,-6.50742 -2.785,-3.9625 -7.79024,-6.21524 -12.50274,-6.71524 -1.61219,-0.33906 -3.31324,-0.51146 -5.04648,-0.51562 z m -58.70234,6.78672 c -0.7036,-0.0409 -1.43664,0.48142 -1.52852,1.21642 -1.775,6.6975 -4.83242,12.93764 -7.45742,19.31014 -2.13,3.21 -4.04024,7.11244 -6.25274,10.45744 -1.64,1.705 -3.12492,3.65522 -4.25742,5.75272 -1.1175,1.055 -2.08258,2.325 -2.91758,3.625 -0.5225,2.6425 2.88508,2.73234 4.63008,3.01484 2.295,1.8075 4.51992,3.74508 6.28242,6.09258 1.155,1.63 4.59024,1.27992 4.87774,-0.90508 2.9725,-13.415 5.75976,-26.87756 8.03476,-40.43006 0.27,-2.6075 0.91742,-5.61258 -0.74258,-7.89258 -0.20312,-0.15188 -0.43422,-0.22778 -0.66874,-0.24142 z m 131.65312,19.44728 c -1.33726,0.002 -2.67438,0.0136 -4.00938,0.0242 -0.605,0.4425 -1.05226,1.07992 -1.38476,1.74492 1.8325,2.365 3.42484,5.84014 1.92734,8.72264 -1.975,-0.6875 -3.68508,-2.51514 -5.91758,-2.72264 -3.31,-1.2475 -8.3425,-2.3072 -11.2375,0.5578 -1.465,2.3475 -1.72968,6.24734 0.23282,8.18984 4.9575,6.7475 14.66242,4.06494 21.89492,4.93244 5.515,0.75 11.11508,0.74264 16.65508,1.21014 l 0.20742,0.0301 c 3.84,0.7975 7.53976,2.16734 10.95976,4.08984 1.085,0.985 2.29258,1.9275 3.53008,2.7125 2.3575,2.765 4.39,6.04766 5.7625,9.24766 1.895,5.495 0.61742,11.23469 1.05742,16.92969 -0.71,1.0125 -0.2475,2.3425 -0.3375,3.4875 3.88,0.6875 7.69508,1.66508 11.51758,2.60508 1.7275,0.5 4.58992,3.2625 5.89492,0.6625 4.4,-5.585 9.55524,-11.72985 9.56524,-19.21485 -0.2925,-1.595 -0.40016,-3.43272 -1.47266,-4.71522 -2.66046,-6.09772 -7.9234,-11.92566 -14.4836,-13.79454 0,0 0,0 0,0 -0.0352,-0.0202 -0.0707,-0.039 -0.10704,-0.0559 -0.15062,-0.0697 -0.31148,-0.10852 -0.48398,-0.10196 -3.5125,-1.715 -7.97008,-2.95242 -11.69258,-4.76992 -1.5475,-1.245 -3.3925,-2.10992 -5.0375,-3.21992 -3.6375,-2.6225 -2.99976,-6.72522 -0.23476,-9.55272 0.7225,-0.6725 1.75984,-1.63486 1.70234,-2.65236 -2.6275,-0.5375 -5.21992,-1.35514 -7.89492,-1.58514 -4.5325,-1.195 -9.75742,-1.75236 -14.60742,-2.18986 -3.97876,-0.48936 -7.99406,-0.57678 -12.00586,-0.57186 z m -30.72149,1.10508 c -10.20096,0.1044 -21.54523,6.89444 -22.14023,17.95664 -1.9775,8.97 7.64992,15.19772 15.55742,15.65272 11.49,2.73 23.48266,0.515 35.14766,0.5125 3.1525,0.4975 6.36476,0.65242 9.50976,1.26992 2.6725,1.0425 5.73,2.44236 8.3125,3.95236 0.4925,1.195 1.75524,1.94764 2.70274,2.78514 2.2125,2.31 2.72508,5.48758 4.01758,8.24258 0.845,2.845 3.20242,6.08992 6.54492,5.76992 3.25,0.545 6.54,-1.72015 7.1625,-4.96015 0.8925,-4.4 0.80492,-9.32235 -1.09258,-13.43985 -0.975,-3.295 -3.56266,-6.12508 -6.63516,-7.60508 -3.545,-2.565 -7.91968,-3.99014 -12.12968,-4.96014 -2.83,-1.0175 -5.89774,-1.38978 -8.89024,-1.55978 -6.9625,-0.83 -14.18508,-0.3175 -21.24258,-0.4375 -4.26,-1.31 -8.38492,-3.55272 -11.99492,-6.29022 -4.3725,-2.9475 -4.8225,-8.35228 -2.5375,-12.74728 0.885,-1.0125 1.4025,-2.50742 1.975,-3.76992 -1.37594,-0.265 -2.80991,-0.38678 -4.26719,-0.37186 z m -165.9168,24.56834 c -1.09412,0.0342 -2.2893,0.92922 -2.23086,2.4008 -0.1225,6.3975 1.44492,12.875 1.85742,19.31249 0.645,11.81 -2.90742,23.37007 -7.93242,33.91757 -0.05,3.22 4.10726,6.07008 7.12226,7.13008 2.415,-0.03 3.99516,-2.60508 6.49766,-2.58008 2.4675,-0.8425 6.77484,1.01758 6.91485,-2.93242 -0.87501,-12.2525 0.5675,-24.61742 5.5125,-35.88242 0.66,-1.255 1.18508,-2.6503 1.45508,-4.0203 0.8975,-0.6275 1.67508,-3.07 -0.18242,-2.7625 -2.91,0.7825 -5.88984,1.96 -8.98985,2.175 -5.16,-0.6375 -6.36,-6.86492 -7.65,-10.95742 -0.01,-1.2375 -0.49282,-2.45478 -0.64532,-3.68478 0.12306,-1.50586 -0.7635,-2.14616 -1.7289,-2.11602 z m 107.89141,24.94649 c 2.19194,0.006 4.34196,0.24547 6.31016,0.67422 7.2175,1.645 9.86484,10.69265 6.93984,16.87265 -0.5825,1.0475 -1.78218,1.84266 -3.02968,1.56016 -2.355,-3.4875 -2.0675,-8.61766 -5.5875,-11.27266 -3.1325,-2.555 -8.19024,-1.98984 -11.56524,-0.21484 -5.6875,2.265 -5.8,9.85484 -4.2625,14.82734 1.56,5.0625 7.43774,6.5825 12.14024,6.3375 13.145,-0.5775 24.7225,-7.595 37.25,-10.775 5.1025,-1.485 10.86468,0.95243 13.61718,5.40743 -4.815,-2.1275 -10.37734,-2.66727 -15.47734,-1.25977 -14.315,2.8425 -25.30992,14.98469 -40.24492,15.50469 -12.2775,-0.65 -20.345,-16.0725 -14.7875,-26.8 2.50782,-7.92969 10.86896,-10.88348 18.69726,-10.86172 z m 77.53712,7.42695 c 2.97914,0.004 5.98336,0.68899 8.6707,1.93008 1.2875,2.4375 -1.74532,3.48477 -3.54532,2.72227 -3.7,-1.375 -8.82218,0.46742 -9.42968,4.73242 -1.2425,3.455 1.36242,6.56765 1.34492,9.97265 -0.555,3.0575 -5.23008,2.68516 -6.20508,0.0602 -2.22,-4.54 -4.64016,-10.35031 -2.03516,-15.19531 1.8625,-3.0775 5.79032,-3.94985 9.14532,-4.11485 0.68062,-0.0731 1.3668,-0.10835 2.0543,-0.10742 z m 25.7832,30.55977 c 6.9775,3.01749 14.01226,6.97773 20.75976,10.40273 -4.235,0.98 -8.55,2.04508 -12.8875,2.50508 -4.0375,-2.9325 -7.72726,-7.77782 -7.87226,-12.90781 z m -222.43127,1.88633 c -2.4826,-0.0669 -4.95686,1.69336 -6.63124,3.44648 -2.0475,1.595 -3.46766,3.9275 -4.17266,6.4125 l 0,1.075 c 0.1475,0.715 0.34984,1.45 0.71484,2.1 0.1375,0.2825 0.28266,0.5675 0.47266,0.825 2.3,2.9725 6.52008,2.91476 9.89258,2.73476 0.1075,-0.02 0.31984,-0.0601 0.42734,-0.0801 3.83,-0.28 5.22516,-4.91742 4.52266,-8.11992 0.065,-2.7375 -0.58492,-5.855 -2.76992,-7.65 -0.8,-0.49624 -1.62872,-0.72144 -2.45626,-0.74374 z m 15.01642,1.5125 c -0.2251,0 -0.45336,0.0116 -0.68516,0.034 -0.3375,0.0475 -1.01508,0.14468 -1.35508,0.19218 -2.1925,0.2475 -4.17992,1.8925 -4.78242,4.0125 -1.92,3.9975 -1.85758,9.89782 1.66992,13.10782 3.7425,2.8825 11.8575,3.90234 13.56251,-1.59766 2.28382,-5.47586 -1.43171,-15.76138 -8.40977,-15.74882 z m 15.63907,0.29218 c -1.21324,-0.0328 -2.27462,0.48554 -2.71172,2.06172 0.7575,3.2625 2.06968,6.48742 1.75468,9.90742 -0.4725,2.1575 0.71766,4.59766 2.98516,5.02266 1.105,0.7825 2.63516,0.79734 3.94766,0.71484 2.62,0.405 5.51242,-1.31492 5.26992,-4.25742 -0.43,-4.78 -3.355,-9.22024 -7.225,-11.95274 -1.07578,-0.71452 -2.6457,-1.45932 -4.0207,-1.49648 z m 146.32187,4.17774 c 0.78648,0.01 1.58664,0.10968 2.39883,0.31406 -3.0225,2.455 -7.25008,4.50484 -9.83008,7.82734 -9.2425,11 -16.85984,23.25492 -24.12734,35.61992 -5.235,7.44 -13.51532,12.36758 -22.17032,14.83008 -10.59,3.3175 -24.39,-3.63766 -25.275,-15.33516 -0.035,-2.0725 -0.0247,-4.13718 -0.0172,-6.20468 0.41,-6.3975 3.4472,-13.03508 9.1672,-16.33008 4.4375,-2.86 9.93758,-3.31 15.08008,-3.45 4.2925,-0.2 9.32772,0.845 11.90272,4.6 1.865,3.295 2.005,7.495 0.6875,11.0125 -1.1225,2.725 -4.895,3.42234 -7.3,2.05234 -0.4625,-3.255 -1.3303,-7.01226 -4.3703,-8.82226 -4.585,-2.0625 -10.89,0.30226 -12.275,5.32226 -1.4875,5.0525 -1.78492,12.215 3.68008,15.0125 8.1425,3.14 18.27491,1.43508 24.61991,-4.70742 8.12,-11.0825 14.46758,-23.51992 23.85508,-33.64492 3.63125,-3.81938 8.46847,-8.16506 13.97383,-8.09648 z m -116.76367,9.33398 c -1.4925,1.1725 -2.41016,3.55992 -3.03516,5.44492 -2.7225,6.685 -2.85508,14.15266 -2.74258,21.27266 0.0325,13 5.02258,25.34234 6.00508,38.20234 0.1625,0.605 -0.76258,2.53242 0.33242,2.13242 3.975,-1.75 8.39532,-2.185 12.69532,-2.1625 1.6475,0.5025 3.43226,0.50524 4.95976,1.39024 -0.7925,-5.985 1.43508,-11.87032 3.01758,-17.53282 1.1975,-3.055 2.08766,-6.50984 2.49766,-9.81484 1.7675,-6.71 -1.81758,-14.29266 -3.75508,-20.73516 -0.1025,-1.43 -0.47774,-2.82234 -0.79024,-4.21484 -2.9025,0.285 -5.81984,0.2975 -8.72734,0.0124 -4.72,-1.215 -8.42492,-5.71484 -9.74492,-10.22734 -0.035,-1.275 -0.38,-2.75008 -0.7125,-3.76758 z m 196.75938,0.1164 c -3.6131,-0.0845 -1.6968,5.3511 -0.24454,7.28594 1.335,4.0175 3.26266,8.215 6.22266,11.2875 2.1975,3.7675 5.25492,-0.9625 6.84492,-2.7 2.975,0.25 2.90234,4.69516 0.90234,6.23516 -1.8,3.6375 -6.35984,6.32 -6.51484,10.525 4.335,2.5025 8.97242,-1.75258 11.24492,-5.06758 1.73,-1.3775 3.01766,-3.49266 4.03516,-5.44766 2.6625,-3.23 4.65734,-9.16718 0.46484,-12.01718 -5.975,-5.18 -14.2675,-7.245 -21.65,-9.8875 -0.49874,-0.13688 -0.9317,-0.20494 -1.30546,-0.21368 z m -29.68594,34.74298 c -1.90484,0.0448 -3.7229,1.02874 -4.33868,3.14296 -1.25,5.085 -1.025,12.0475 3.5125,15.4375 1.525,2.095 4.5925,2.58992 7.05,2.68242 3.0075,0.485 6.74266,0.26032 8.89766,-2.21718 2,-2.77 1.05258,-6.59 3.16758,-9.3125 1.67,-2.4575 4.98226,-2.60032 7.63476,-2.18282 1.965,0.9875 2.92758,3.35258 4.71758,4.61758 1.905,1.05 4.09774,-0.86226 3.52774,-2.93476 0.68,-4.4825 -5.22258,-6.26508 -8.83008,-5.81758 -2.2875,-0.395 -4.65274,-0.12508 -6.91524,0.14492 -2.2225,2.2 -4.64734,4.24734 -6.75234,6.55234 -3.9825,2.415 -5.0725,-3.44726 -6.2625,-6.03476 -0.36704,-2.64094 -2.9599,-4.13578 -5.40898,-4.07812 z m -28.79062,20.85976 c -0.14622,0 -0.29688,0.021 -0.4504,0.0684 -1.5775,0.3675 -2.77766,1.52226 -3.83516,2.68476 -6.1775,7.195 -11.90476,15.40008 -13.22226,25.03008 -0.585,4.8875 -1.37274,10.3675 1.00976,14.9 2.1075,3.515 8.54008,2.13266 8.94258,-1.98984 0.1275,-3.6125 -1.14758,-7.08016 -1.25508,-10.68516 -1.7275,-9.8875 2.27516,-20.63242 10.18516,-26.86992 1.0286,-1.04218 0.0388,-3.13156 -1.3746,-3.13828 z m 6.63476,8.67188 c -0.8036,0 -1.60492,0.24726 -2.21524,0.80624 -4.055,3.655 -4.39492,9.57266 -6.00742,14.47266 -1.0625,4.8325 -2.57734,9.945 -1.16484,14.875 -0.2775,2.89 4.44984,4.85242 5.65234,1.83242 1.0025,-4.58 1.03242,-9.325 1.40742,-13.9875 1.56,-4.7825 4.09258,-9.29476 5.39258,-14.12226 1.05836,-2.2425 -1.0112,-3.87414 -3.06484,-3.87656 z m -135.02852,6.88476 c -0.60968,0.007 -1.23594,0.0744 -1.8793,0.21172 -4.135,-0.08 -8.38,1.49742 -11.3375,4.41992 -2.54,1.835 -5.64742,5.94016 -3.66992,9.03516 4.2725,-1.95 8.64,1.80468 12.7375,0.52968 1.8325,-0.11 3.56024,-0.78992 5.32774,-1.21992 3.9975,-0.095 7.47726,3.41508 11.57226,2.24258 2.78,-0.1875 3.06008,-4.26508 1.01758,-5.48008 -3.51852,-4.13024 -7.87478,-9.80222 -13.76836,-9.73906 z m 147.33476,2.1375 c -3.19712,-0.0594 -6.70772,1.45516 -8.05898,4.4793 -2.4375,5.0425 -2.30984,11.05484 -1.00234,16.38984 0.8775,3.9025 6.44258,5.44992 9.06758,2.34492 0.97,-4.11 1.44976,-8.3225 2.20976,-12.475 0.7175,-1.635 1.35024,-3.31976 2.00274,-4.98476 0.995,-0.845 1.61234,-2.22016 2.55234,-3.21016 -0.72,-0.96 -1.99242,-1.40016 -3.10742,-1.69766 l -0.20274,-0.05 c -1.00688,-0.50906 -2.20988,-0.77322 -3.46094,-0.79648 z m 24.22578,1.47266 c -5.25092,0.0443 -10.83632,3.33008 -13.41484,7.65156 -4.3825,5.2 -5.45476,14.54484 -0.75976,20.12734 2.9125,2.41 6.2275,4.37024 9.5,6.25274 1.6125,1.825 4.02242,2.82484 5.96992,4.28984 1.025,-1.1625 1.50008,-3.02516 2.40508,-4.36016 2.8875,-2.7125 6.22742,-5.29 9.90742,-7.0625 0.985,-0.745 3.72984,-1.84968 3.17734,-3.39218 -1.935,-4.025 -5.39992,-7.25016 -6.50742,-11.67266 -1.0125,-3.515 -1.65258,-7.83234 -4.46758,-10.26484 -1.75218,-1.10742 -3.75544,-1.5865 -5.81016,-1.56914 z m -191.45898,13.30702 c -2.993,-0.002 -5.92382,1.30646 -7.3457,4.18438 -1.33,3.61 -1.165,7.8125 0.325,11.35 1.7275,4.56 9.13734,5.77242 11.91484,2.19492 2.88,-1.86 4.32266,-5.77992 4.07266,-9.14492 0.52254,-5.39144 -4.2977,-8.58174 -8.9668,-8.58438 z m 19.25938,1.6961 c -1.02952,0 -2.05758,0.25382 -2.99492,0.81602 -2.6175,0.5025 -3.385,3.41492 -3.9125,5.64492 -0.3225,4.0375 -0.56524,8.84 2.59726,11.9125 2.3975,1.835 5.94992,2.03984 8.48242,0.38984 3.1625,-2.78 3.31282,-7.54726 2.80782,-11.40976 0.38868,-4.0957 -3.30318,-7.35094 -6.98008,-7.35352 z m 17.10782,0.027 c -3.76408,-0.0522 -6.76406,4.03828 -6.37032,7.8664 -0.2375,4.0025 -0.0227,10.2025 4.70976,11.575 4.27,1.775 7.96274,-2.77492 8.55274,-6.60742 1.52,-4.21 0.31976,-11.97492 -5.24024,-12.54492 -0.56124,-0.18938 -1.11422,-0.28162 -1.65194,-0.28906 z m 174.40742,17.85312 c -5.09668,0.0477 -10.14544,2.9295 -11.51798,8.19062 -1.6675,3.73 -2.08484,9.97758 1.42266,13.06758 3.465,1.91 6.81992,-2.05984 9.53242,-3.85234 2.375,-0.855 4.61,-2.13274 7.15,-2.51524 0.265,0.06 0.5325,0.0503 0.8,-0.0297 4.225,0.9725 8.91008,1.56234 12.59258,4.02734 4.2925,-1.96 8.99984,-1.05234 13.47734,-1.46484 1.4225,-1.9275 -1.535,-2.94782 -3.1125,-2.89532 l -0.18984,-0.0648 c -0.7925,-0.7775 -2.56742,-1.07016 -3.75742,-1.19766 -0.41,-0.2125 -0.84492,-0.35468 -1.28242,-0.46718 -3.225,-1.43 -6.86,-3.3325 -10.0125,-5.2375 -0.175,-0.2625 -0.455,-0.41782 -0.725,-0.54532 -1.5625,-1.9325 -4.33282,-2.90734 -6.39532,-4.33984 -2.24878,-1.8373 -5.12292,-2.70254 -7.98202,-2.67578 z m 9.13906,19.17148 c -1.05,-0.007 -2.10548,0.10306 -3.13672,0.2543 -2.3675,0.475 -4.945,1.3375 -6.35,3.4375 -1.555,1.8425 -2.00258,4.47492 -1.69258,6.81992 0.2475,3.9475 2.92484,7.53992 6.23984,9.54492 2.635,2.195 6.05992,3.10266 9.36992,3.71016 l 1.82774,0 c 1.605,-0.3875 3.40242,-0.315 4.84492,-1.2125 1.275,-0.555 2.60766,-1.18992 3.28516,-2.48242 3.4,-4.22 2.07,-10.99 -2.325,-14.0375 -0.065,-0.06 -0.19282,-0.18516 -0.25782,-0.24766 -2.18,-2.675 -5.44984,-4.33992 -8.70234,-5.33242 -1.00876,-0.32124 -2.05312,-0.4468 -3.10312,-0.4543 z m 23.60078,0.76172 c -4.39,-0.03 -6.41774,5.24766 -4.52774,8.77266 1.84,3.8925 0.28524,9.49 3.71524,12.2875 1.5025,1.6525 3.9425,1.39484 5.9625,1.42734 4.495,0.0525 9.65992,-0.59734 12.54492,-4.48984 2.185,-1.89 4.63992,-1.09024 6.00742,1.27226 1.9575,2.8725 7.1875,1.25782 7.35,-2.21718 0.0825,-0.4025 0.115,-0.81274 0.1625,-1.21524 0.065,-0.1575 0.1975,-0.47492 0.2625,-0.63242 l 0,-2.56484 c -0.325,-1.7075 -0.765,-3.435 -1.7125,-4.9125 -1.0025,-2.0725 -2.4875,-4.08766 -4.5125,-5.24766 -2.3625,-2.01 -6.28,-3.565 -9.05,-1.475 -2.0975,0.4325 -3.995,1.48742 -5.9625,2.29492 -3.42,-0.6625 -6.4375,-2.60226 -9.825,-3.28476 -0.105,-0.003 -0.31234,-0.0128 -0.41484,-0.0152 z"
                 inkscape:connector-curvature="0" />
            </g>
          </g>
        </svg>
        
        `
    },
    "Virgo": {
        "Aries": [62, `<h3>When Aries and Virgo come together in a love match, they may think at first that they have nothing in common and nothing to learn from one another.</h3>
        <p>This relationship takes time to develop as each partner must learn to understand where the other is coming from. Aries and Virgo can seem like total opposites: While Aries is brash, dominant and aggressive, always jumping into new things and almost always impatient, Virgo is detail-oriented and quiet, even shy, and works patiently toward long-term goals. Aries’s energy is fiery and impetuous while Virgo’s is much slower and more grounded. It’s these very differences, however, that can teach Aries and Virgo so much, once they just look beneath one another’s surfaces to see what lies beneath.</p>`],
        "Taurus": [91, `<h3>When Taurus and Virgo come together in a love affair, it’s a union of innate practicality.</h3>
        <p>Both of these Signs employ practicality in their daily lives as the most efficient means to most problems. They can be quite sincere and devoted to one another; as people, both have a great deal of integrity. Virgo likes Taurus’s strength and dedication while Taurus appreciates Virgo’s quick mind.</p>`],
        "Gemini": [67, `<h3>When Gemini and Virgo come together in a love affair, it’s crucial to the survival of the relationship that they take time to learn about one another’s approach to life and love — and remember that both partners’ attitudes are worth understanding! Gemini is symbolized by the Twins; they can see both sides of a story, they tend to vacillate between two courses of action and sometimes they can seem as if they have a split personality! This relationship is greatly strengthened when steady Virgo provides one Twin with a steady emotional anchor while allowing the other Twin to flit about at will.</h3>
        <p>Virgo may be a bit too serious and demanding for Gemini, especially if this occurs early in the relationship before Gemini has fully committed. If Virgo just gives it time, things will smooth out.</p>`],
        "Cancer": [91, `<h3>When Cancer and Virgo make a love match, a strong, down-to-earth relationship with staying power is the happy result.</h3>
        <p>This is a relationship with great potential to get better and better over the passing years. Both Cancer and Virgo are goal-oriented and disciplined. They are sincere and devoted to one another and share a strong sense of purpose. No lightweight love here: These two were not really built for flings! Cancer and Virgo deeply admire one another: Virgo respects Cancer’s quiet strength and dedication while Cancer appreciates Virgo’s keen adaptability and intelligence.</p>`],
        "Leo": [35, `<h3>When Virgo and Leo join together in a love match, they may initially overlook common interests and feel they have nothing to gain from one another.</h3>
        <p>This is a relationship that evolves over time, each partner gradually understanding and appreciating the other. Leo is extroverted, dominant, and charismatic, and often has a short fuse. Virgo is studious and withdrawn, possessed of more versatility than Leo. Although there are differences, they make a wonderful love match when each partner warms up to the other’s unfamiliar style.</p>`],
        "Virgo": [64, `<h3>When two Virgos join together in a love match, they are likely to structure their lives in beautiful conjunction.</h3>
        <p>The merging of two incredibly practical, industrious sorts such as these creates an incredibly devoted and doting couple although public displays of affection will be rare. Though their shared perfectionism and skepticism could lead to conflict, the level-headed Virgo duo will quickly resolve any disputes and move on to more pleasant times.</p>`],
        "Libra": [68, `<h3>When Virgo and Libra join together in a love match, it can be like puting two puzzle pieces together.</h3>
        <p>Each locks into the other and sits comfortably in place. Both Signs seek security in partnership, and they share a love of beauty and culture. They can work together efficiently and smoothly because they desire similar rewards. The Virgo-Libra relationship may trickle along in the beginning, but it will rev up once both partners grow to respect one another.</p>`],
        "Scorpio": [89, `<h3>When Virgo and Scorpio join together in a love match, these Signs that are two apart in the Zodiac are brought together.</h3>
        <p>Their placement gives the relationship an intense karmic bond. The Virgo-Scorpio couple is loyal and deep, with very strong ties. Usually, this couple will stay away from crowds; they aren’t too inclined to go to parties or dances, but alone they can form a very fulfilling union.</p>`],
        "Sagittarius": [49, `<h3>When Virgo and Sagittarius join together in a love match, the result is a well-rounded couple.</h3>
        <p>Sagittarius is an explorer who loves to socialize, while Virgo prefers to analyze Sag’s discoveries. Both enjoy talking about it with one another. Virgo may demand perfection too soon for Sagittarius’s taste, but over time Sagittarius will appreciate a steady and reliable lover whose head isn’t always in the clouds.</p>`],
        "Capricorn": [96, `<h3>When Virgo and Capricorn join together in a love match, theirs is a pragmatic, smart relationship.</h3>
        <p>Both Signs are highly rational, and both expect a lot of themselves and others. Virgo adores Capricorn’s dedication and intensity, while Capricorn admires Virgo’s intuition and attention to detail. Together they form a solid union based firmly in reality.</p>`],
        "Aquarius": [31, `<h3>When Virgo and Aquarius join together in a love match, they bring out either the best or worst in one another.</h3>
        <p>Virgo has a more rigid, theory-oriented approach to life. The poetic Aquarian approach, on the other hand, knows nothing of the scientific world. But these two lovers may actually thrive on their differences; they grow together as they learn about one another.</p>`],
        "Pisces": [88, `<h3>When Virgo and Pisces join together in a love match, it generally makes for a healthy relationship.</h3>
        <p>The two Signs are opposite one another within the Zodiac, and such Signs tend to be well balanced, one making up for qualities the other lacks. They are an easy-going, do-gooding duo, and often devote their time to helping others as well as one another. Each partner in this couple brings out the best aspects in the other.</p>`],
        "svg": `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
        <!-- Created with Inkscape (http://www.inkscape.org/) -->
        
        <svg
           xmlns:dc="http://purl.org/dc/elements/1.1/"
           xmlns:cc="http://creativecommons.org/ns#"
           xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
           xmlns:svg="http://www.w3.org/2000/svg"
           xmlns="http://www.w3.org/2000/svg"
           xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
           xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
           width="50.86133mm"
           height="50.86133mm"
           viewBox="0 0 718.79998 718.79998"
           id="svg2"
           version="1.1"
           inkscape:version="0.91 r13725"
           sodipodi:docname="VirgoDrawing5.svg">
          <defs
             id="defs4">
            <filter
               inkscape:label="Modified combined Lighting"
               inkscape:menu="Bevels"
               inkscape:menu-tooltip="Basic specular bevel to use for building textures"
               style="color-interpolation-filters:sRGB"
               id="filter125483"
               height="1.04"
               width="1.04"
               y="-0.02"
               x="-0.02">
              <feGaussianBlur
                 stdDeviation="6"
                 in="SourceGraphic"
                 result="result0"
                 id="feGaussianBlur125485" />
              <feDiffuseLighting
                 lighting-color="#ffffff"
                 diffuseConstant="1"
                 surfaceScale="4"
                 result="result5"
                 id="feDiffuseLighting125487">
                <feDistantLight
                   elevation="45"
                   azimuth="235"
                   id="feDistantLight125489" />
              </feDiffuseLighting>
              <feComposite
                 k1="1.4"
                 in2="SourceGraphic"
                 in="result5"
                 result="fbSourceGraphic"
                 operator="arithmetic"
                 id="feComposite125491"
                 k2="0"
                 k3="0"
                 k4="0" />
              <feGaussianBlur
                 result="result0"
                 in="fbSourceGraphic"
                 stdDeviation="6"
                 id="feGaussianBlur125493" />
              <feSpecularLighting
                 specularExponent="25"
                 specularConstant="1"
                 surfaceScale="4"
                 lighting-color="#ffffff"
                 result="result1"
                 in="result0"
                 id="feSpecularLighting125495">
                <feDistantLight
                   azimuth="235"
                   elevation="45"
                   id="feDistantLight125497" />
              </feSpecularLighting>
              <feComposite
                 k3="1"
                 k2="1"
                 operator="arithmetic"
                 in="fbSourceGraphic"
                 in2="result1"
                 result="result4"
                 id="feComposite125499"
                 k1="0"
                 k4="0" />
              <feComposite
                 operator="in"
                 result="fbSourceGraphic"
                 in2="SourceGraphic"
                 in="result4"
                 id="feComposite125501" />
              <feColorMatrix
                 result="fbSourceGraphicAlpha"
                 in="fbSourceGraphic"
                 values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
                 id="feColorMatrix125639" />
              <feGaussianBlur
                 id="feGaussianBlur125641"
                 stdDeviation="1.1000000000000001 1.1299999999999999"
                 result="blur"
                 in="fbSourceGraphic" />
              <feColorMatrix
                 id="feColorMatrix125643"
                 values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 50 0 "
                 result="colormatrix" />
              <feComposite
                 id="feComposite125645"
                 in2="fbSourceGraphic"
                 in="colormatrix"
                 operator="in" />
            </filter>
            <filter
               inkscape:collect="always"
               style="color-interpolation-filters:sRGB"
               id="filter126661"
               x="-0.099000007"
               width="1.198"
               y="-0.099000007"
               height="1.198">
              <feGaussianBlur
                 inkscape:collect="always"
                 stdDeviation="2.4750002"
                 id="feGaussianBlur126663" />
            </filter>
          </defs>
          <sodipodi:namedview
             id="base"
             pagecolor="#ffffff"
             bordercolor="#666666"
             borderopacity="1.0"
             inkscape:pageopacity="0.0"
             inkscape:pageshadow="2"
             inkscape:zoom="0.73594882"
             inkscape:cx="359.39999"
             inkscape:cy="359.39999"
             inkscape:document-units="px"
             inkscape:current-layer="layer1"
             showgrid="false"
             inkscape:window-width="1366"
             inkscape:window-height="705"
             inkscape:window-x="-8"
             inkscape:window-y="-8"
             inkscape:window-maximized="1"
             fit-margin-top="0"
             fit-margin-left="0"
             fit-margin-right="0"
             fit-margin-bottom="0" />
          <metadata
             id="metadata7">
            <rdf:RDF>
              <cc:Work
                 rdf:about="">
                <dc:format>image/svg+xml</dc:format>
                <dc:type
                   rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
                <dc:title></dc:title>
              </cc:Work>
            </rdf:RDF>
          </metadata>
          <g
             inkscape:label="Layer 1"
             inkscape:groupmode="layer"
             id="layer1"
             transform="translate(-770.78894,-519.00796)">
            <g
               id="g91385">
              <circle
                 transform="matrix(10,0,0,10,-3421.7007,-4530.6759)"
                 id="circle124432-8"
                 r="30"
                 cy="540.90839"
                 cx="455.18896"
                 style="fill:#000000;fill-opacity:1;stroke:none;stroke-opacity:1;filter:url(#filter126661)" />
              <circle
                 transform="matrix(10,0,0,10,-3421.7007,-4530.6759)"
                 id="circle124432"
                 r="30"
                 cy="538.90839"
                 cx="453.18896"
                 style="fill:#83fb00;fill-opacity:1;stroke:none;stroke-opacity:1;filter:url(#filter125483)" />
              <path
                 style="opacity:0.7"
                 id="path4"
                 d="m 1111.457,663.62911 c -13.5575,1.355 -22.7576,13.115 -28.9176,24.2125 -4.89,-2.4075 -8.6124,-8.09992 -14.6649,-7.44492 -2.945,-0.2075 -6.27,1.72734 -6.3875,4.92734 -1.1825,10.9125 -1.0998,21.92993 -2.0148,32.85743 -2.0375,1.3875 -5.9051,2.68523 -6.9551,-0.52227 -8.7675,-11.0975 -16.4826,-23.14773 -26.7801,-32.94023 -3.1175,-3.35 -8.4051,-5.7625 -12.4226,-2.35 -5.0675,4.985 -4.8248,13.14007 -3.0348,19.55507 1.58,8.73501 2.3201,17.59766 3.3301,26.41016 1.1575,17.9625 -0.1003,36.00249 0.7047,53.97501 -0.205,3.6375 1.9426,6.73726 4.2351,9.32226 -7.235,5.865 -4.0276,15.72258 -4.7976,23.66758 -2.73,33.895 -6.695,67.7275 -11.6,101.3625 -1.015,4.7825 5.6401,5.44524 7.8976,2.16524 5.5675,-7.0625 4.54,-17.14008 6.7825,-25.14258 2.16,0.585 3.6852,2.91234 5.9527,3.32734 2.8275,-0.535 4.1349,-3.5725 5.2949,-5.875 4.445,-10.305 5.5774,-21.57258 7.4199,-32.53008 2.5125,2.195 6.6976,2.00016 8.4926,-1.07734 4.885,-8.1525 4.7675,-18.01742 6.35,-27.13242 1.4525,-10.3 0.39,-20.74774 0.7625,-31.10274 1.7875,-1.3025 3.6076,-2.7497 4.0926,-5.0422 2.0375,-7.2925 2.8547,-15.0803 2.0547,-22.5953 0.1225,-4.68 0.065,-9.3575 0.048,-14.0375 -0.5325,-3.01 2.7099,-4.45219 4.0149,-6.74219 1.345,0.145 0.4328,2.14984 0.7703,3.00234 -0.47,25.98751 1.3473,52.11493 -2.0402,77.96993 -3.265,27.77 -6.64,56.29242 -19.02,81.73242 -1.475,4.2 -5.4899,8.76766 -3.0199,13.36016 2.265,2.485 5.4449,-0.97742 6.6074,-3.03242 2.8575,-5.125 5.4575,-10.42516 8.7125,-15.32266 3.17,2.845 6.2776,-1.3125 7.7301,-3.975 5.535,-9.685 8.9973,-20.53242 11.4473,-31.35742 6.31,-0.0275 9.5977,-6.39016 9.4402,-11.99766 -0.4225,-3.0725 2.9524,-4.0397 4.0949,-6.4047 3.3725,-5.94 1.0674,-13.19264 1.8524,-19.64764 0.935,-7.635 3.3126,-15.0075 5.0176,-22.4875 0.4375,-1.005 1.1677,-3.95244 2.6777,-2.60742 3.885,3.49248 5.7897,8.52492 7.7547,13.24492 7.815,-4.8425 16.9727,-7.97744 26.2652,-7.28242 5.44,0.565 10.5874,2.46976 15.6774,4.33476 -6.305,-9.245 -13.6524,-18.69978 -15.0774,-30.17228 -1.165,-6.2925 6.4824,-8.09 9.1324,-12.6125 8.9575,9.4875 19.9774,16.89978 31.9024,22.09728 13.35,3.71 27.3226,4.3003 41.0476,5.6453 7.3025,2.2825 14.5525,7.4425 22.5125,4.75 5.61,-1.42 7.5777,-9.30008 4.2102,-13.68008 -1.99,-2 -4.7375,-2.735 -7.4,-3.3 3.9625,-5.27 8.2674,-10.30506 12.3324,-15.50506 5.43,1.02 11.2099,2.78514 16.6774,1.03514 2.65,-0.665 4.9775,-3.81508 3.3875,-6.43008 -4.06,-2.755 -9.475,-1.715 -14.075,-1.625 1.18,-2.24 2.8725,-4.24522 4.805,-5.86522 4.01,3.0925 9.0349,5.6278 14.2399,4.4078 2.4525,-0.285 3.8676,-3.19514 2.7601,-5.36014 -2.52,-2.985 -6.81,-3.58516 -10.08,-4.92266 4.9925,-2.995 11.57,-6.34969 13.1675,-12.79219 l 0,-0.45508 c 0.9475,-3.9575 -2.9874,-7.21508 -6.5699,-5.33008 -5.5525,2.94 -7.7624,9.41485 -10.9949,14.43985 -1.2775,-4.01 -0.8827,-10.80219 -6.5977,-11.34219 -4.35,2.0575 -2.8,8.10226 -2.2175,11.85976 -0.1475,3.1025 4.2449,5.99015 1.4199,8.67265 -1.315,1.4175 -2.6047,2.85508 -3.8922,4.29258 -0.9525,-4.7575 -1.265,-11.39515 -6.6375,-13.39765 -1.6225,-0.81 -2.4627,1.32008 -2.7152,2.61758 -0.8375,5.99499 1.0875,11.99007 3.4125,17.40507 -2.37,3.6525 -5.28,7.02986 -8.095,10.37736 -0.2375,-8 -0.1226,-16.08266 -0.048,-24.11016 3.75,-4.4275 7.8202,-8.67993 11.3277,-13.33243 1.1475,-1.95249 2.4698,-4.23007 1.8723,-6.58007 -1.19,-1.5075 -3.5548,-3.00227 -5.4098,-1.72227 -3.1425,2.0125 -5.3527,5.12735 -7.4027,8.17734 -0.965,-2.26249 -0.3875,-4.98257 -0.125,-7.39257 6.0925,-3.5575 11.3952,-8.65977 14.5652,-15.02227 1.0875,-2.0725 -0.3449,-5.37765 -2.9699,-4.97265 -1.885,-0.4475 -4.2678,1.11742 -5.7203,0.10742 3.0125,-3.285 6.38,-7.07727 6.2625,-11.83477 0.2225,-2.4225 -2.4422,-4.37766 -4.6547,-3.42266 -3.3325,1.54 -5.9176,4.35274 -9.2426,5.89024 -4.2675,0.775 -6.9151,-3.72781 -10.3926,-5.30781 -2.22,-1.8475 -6.1626,-0.33 -5.8976,2.7875 -0.1125,4.8 3.2276,8.59281 6.2551,11.90781 -1.6925,0.73 -4.185,-0.60016 -6.2375,-0.0602 -2.665,-0.155 -3.2748,3.185 -2.3473,5.1125 3.2525,6.225 8.4173,11.41735 14.5473,14.82735 0.06,2.3775 -0.29,4.75265 -0.45,7.12265 -2.79,-2.9275 -4.5723,-7.39 -8.8348,-8.4125 -3.515,0.3175 -4.8052,4.66516 -2.5102,7.22266 4.16,5.0725 7.88,10.50242 11.97,15.61991 -0.4525,7.7825 10e-5,15.76258 -0.8274,23.43008 -2.44,-3.2675 -5.5799,-6.11008 -7.2574,-9.86758 2.5425,-5.8075 4.2697,-12.35022 2.9422,-18.66522 -0.2725,-2.0925 -2.8997,-3.12493 -4.3547,-1.44493 -3.0125,3.7375 -3.3528,8.71501 -4.5453,13.18751 -1.645,-2.2525 -3.8897,-4.11992 -5.2672,-6.53242 3.6975,-4.15751 3.4172,-10.28243 2.7922,-15.41993 -0.18,-1.895 -1.9724,-3.91015 -3.9949,-2.78515 -4.475,1.63 -4.3125,7.19023 -4.7825,11.15273 -2.8675,-4.975 -5.53,-10.44 -10.1,-14.0625 -3.325,-2.6375 -8.205,0.3175 -7.4125,4.45 1.1075,6.925 8.2601,10.55484 13.6051,13.61484 -3.24,1.18751 -6.8976,1.81507 -9.5676,4.18007 -1.925,1.5675 -1.135,5.08244 1.2075,5.76994 5.1275,1.89 10.0625,-1.39 14.1425,-4.1625 2.1825,1.5975 4.2474,3.52242 5.7524,5.78242 -4.0525,0 -8.175,-0.43758 -12.175,0.38242 -3.6025,0.18 -4.1324,5.62508 -1.0449,7.04258 5.7825,3.2425 12.1927,0.11272 18.2402,-0.22228 4.49,4.985 8.7522,10.1997 12.9172,15.4547 -7.42,1.335 -15.3149,4.45008 -22.6774,1.25508 -11.3475,-5.495 -23.1648,-9.89978 -34.8273,-14.65978 -3.1475,-1.5075 -6.9276,-1.3628 -9.8301,-3.4328 -10.4925,-14.245 -22.5325,-27.26469 -34.45,-40.30469 -4.65,-2.28 -9.5426,-4.21266 -13.8601,-7.12266 -0.9525,-1.28 -1.1676,-4.10515 0.6824,-4.63515 3.405,-0.425 6.2351,2.0975 9.4851,2.5625 3.49,-0.5125 4.995,-4.13727 6.1075,-7.08477 1.72,0.1825 4.0277,1.62742 5.3902,-0.14258 1.1675,-3.9975 1.0547,-8.27234 1.5172,-12.37734 1.5925,-3.285 4.6053,-5.47766 7.2703,-7.82266 2.37,-5.9925 2.1675,-13.12992 -0.4125,-19.04492 -5.145,-9.475 -15.5852,-15.61258 -26.2027,-16.66758 l -3.5,0 z m 0.4879,5.81367 c 7.6009,-0.12996 15.0581,3.93289 20.5546,9.00899 4.2875,3.96 6.7677,11.00484 3.7727,16.38984 -2.2475,2.2375 -4.9777,-0.5575 -7.1352,-1.4875 -2.5025,-2.0125 -6.545,-2.10992 -8.88,0.21758 -7.33,5.5275 -5.3825,16.2375 -10.7075,23 -1.445,1.225 -5.39,2.5725 -6.2175,0.2625 3.28,-8.2325 7.4202,-16.18766 10.6902,-24.41016 -0.5175,-2.075 -2.3376,-0.01 -2.9551,0.95508 -4.345,6.16 -7.3377,13.14742 -10.0902,20.13243 -0.5025,1.335 -2.2174,2.98007 -3.4699,1.46757 -2.065,-2.77 -0.46,-6.57242 0.7675,-9.39492 2.8075,-5.7925 5.7677,-11.50773 8.8727,-17.14023 0.5425,-0.7675 2.6398,-2.71477 0.7848,-2.73477 -4.2775,3.2375 -6.5925,8.3975 -9.3875,12.875 -1.1675,2.215 -2.1651,4.51242 -3.1926,6.79492 -3.3475,3.6725 -5.1197,-3.29734 -3.0047,-5.72734 2.775,-6.545 6.6272,-12.56 10.5672,-18.45 0.615,-1.0675 -0.88,-2.14766 -1.7375,-1.26016 -4.0225,6.4475 -8.5999,12.65258 -14.0774,17.93008 -4.545,-4.1725 -1.0249,-10.51023 2.2301,-14.24023 4.88,-5.3525 9.8149,-11.90485 17.3524,-13.38985 1.747,-0.51562 3.5088,-0.76884 5.2629,-0.79883 z m 117.2476,15.11368 c -0.3701,0.006 -0.7617,0.0593 -1.1754,0.16757 -4.985,2.22 -4.19,9.28243 -3.9875,13.70743 -0.19,3.8875 2.5626,9.8825 7.3426,7.2875 3.8125,-3.2325 3.1948,-9.16735 2.9973,-13.63985 -0.032,-3.13336 -1.5992,-7.57673 -5.177,-7.52265 z m -169.7953,37.07773 c 1.1275,1.92 0.9049,4.32235 1.3824,6.45235 -8.335,4.255 -15.41,11.70992 -17.4625,21.03242 -1.265,5.2375 -0.7001,10.6775 -0.5051,16 0,5.975 0.053,11.95274 -0.018,17.92774 -0.3825,4.6 -2.6299,9.44484 -7.0949,11.32734 -2.2119,0.55238 -3.0466,-0.64992 -3.2203,-2.38946 -0.01,-0.16232 -0.018,-0.32708 -0.032,-0.49454 -0.061,-1.94182 0.5491,-4.36292 0.9793,-5.80858 4.4225,-8.59 1.8076,-18.38484 2.3976,-27.56485 -0.885,-8.87 3.1551,-17.20015 7.7551,-24.48515 3.5825,-5.7025 9.0476,-10.65977 15.8176,-11.99727 z m 2.0297,10.275 c -0.4225,4.115 0.225,8.21477 0.125,12.32227 -2.4675,1.185 -4.4822,3.16515 -5.8172,5.54765 -5.3675,10.40251 -1.8877,22.47993 -2.9402,33.58243 -0.3625,3.525 -0.7299,8.99242 -5.6899,8.48242 1.09,-10.465 0.085,-21.0225 -0.7902,-31.475 0.062,-11.02 3.9375,-24.05227 15.1125,-28.45977 z m 24.2277,22.43242 c 1.7,7.68001 -1.8124,17.16507 -9.5074,20.39259 -2.085,1.0925 -5.8353,-0.12244 -4.5078,-2.98244 2.5275,-1.455 5.3075,-2.46022 7.7625,-4.04022 3.055,-3.9225 4.4127,-8.81493 6.2527,-13.36993 z m 11.9348,25.58985 c 3.4325,5.62 6.6475,16.5375 -1.1,20.3875 -0.1475,-6.3525 0.5025,-13.8875 1.1,-20.3875 z m -13.65,18.91758 c 0.5625,2.9225 -0.2174,6.43022 -2.5074,8.50272 -4.065,-1.4675 -7.9998,1.42728 -12.0723,0.27228 -1.82,-0.7475 -3.4227,-2.6275 -3.5027,-4.6375 1.6325,-1.665 3.445,-0.0823 5.1125,0.49766 4.74,1.8625 10.2949,-0.46766 12.9699,-4.63516 z m -43.5149,0.13242 c 0.445,2.235 -0.3876,7.1153 -0.7476,10.1828 -2.775,-4.11 -7.7273,-1.3475 -11.3098,-0.1875 -3.035,1.1625 -4.8376,-2.48 -3.9301,-4.975 5.73,0.1525 11.305,-1.8103 15.9875,-5.0203 z m 90.1305,22.05468 c -1.9438,0.0196 -3.8815,0.3304 -5.7855,1.0504 -4.025,0.795 -6.4276,5.56742 -10.4801,5.15742 -9.1875,-2.3275 -20.0972,3.11774 -21.9547,12.77774 -0.88,1.795 -0.5677,3.96506 -1.7527,5.64256 -3.49,6.345 -1.0876,13.84744 -2.4176,20.56994 -7.62,12.3025 -8.9225,26.97726 -12.2375,40.74726 -5.2,17.99 -17.0773,33.29274 -30.6223,45.87774 -10.6275,10.0925 -18.5925,22.5675 -25.725,35.275 -4.3375,8.08504 -9.2101,16.0274 -12.0226,24.7999 -1.5525,3.63 2.9927,3.7549 3.7027,1.1024 10.085,-24.46746 23.77,-47.81972 42.75,-66.47222 14.275,-12.195 23.5372,-29.66024 27.3047,-47.94024 2.0325,-9.0575 3.7026,-18.2575 7.0551,-26.95 1.39,-4.2175 4.0949,-7.85992 5.4324,-12.09492 0.6,-5.13 -0.017,-10.31736 0.5078,-15.45236 1.5375,-4.8075 4.3625,-9.7203 9.05,-12.2203 0.6,13.3725 0.3198,26.81024 1.0523,40.16524 -0.1325,8.8725 0.37,17.75992 -0.018,26.63242 -1.3325,16.295 -2.9497,32.66508 -6.5597,48.65508 -1.8375,6.0775 -3.6875,12.29476 -5.6625,18.38476 -6.195,17.3125 -14.0828,33.98774 -22.8078,50.15264 -2.32,3.2125 -3.9948,6.925 -5.8223,10.45 -1.9275,2.905 -3.5249,6.0599 -5.1324,9.1574 -0.3475,2.5375 2.5147,3.7577 4.6047,3.9977 2.8075,0.215 7.0901,0.7623 8.3601,-2.5777 4.2375,-8.915 7.8027,-18.1398 11.0352,-27.4598 9.7725,-28.87992 18.3999,-58.27016 23.3449,-88.40266 0.8425,-5.7225 1.7298,-11.49476 1.2398,-17.29726 0.835,-5.9925 0.1126,-12.52008 0.2676,-18.69258 0.6,-15.8175 -0.083,-31.67758 0.7774,-47.48008 0.1925,-4.1925 3.7077,-8.73016 8.3277,-7.37266 1.885,4.3175 1.6424,9.20266 2.6074,13.76016 2.105,11.2775 3.2924,22.73266 4.9074,34.06016 3.05,20.155 2.2925,40.565 2.0075,60.8875 -1.0925,14.935 -4.2925,29.69976 -7.07,44.42226 -1.4975,6.56 -2.9975,13.3602 -4.2175,20.05266 -1.3675,5.645 -2.6448,11.4399 -3.2473,17.2449 -0.9675,3.5975 -1.5301,8.0699 -1.4551,12.0699 -0.985,5.025 7.0574,2.8225 9.6774,1.9375 4.8925,-2.5625 3.8578,-9.6426 5.2453,-14.2601 1.3025,-7.0425 2.5122,-14.2 2.9297,-21.35 0.645,-3.51746 1.0653,-7.1272 1.0203,-10.7097 0.6825,-3.1475 0.5049,-6.5225 0.5074,-9.7375 0.645,-17.205 0.1848,-34.52492 0.2273,-51.76992 0.96,-28.3575 -4.145,-56.445 -5.7125,-84.68752 0.3675,-5.1975 0.1275,-11.0375 3.32,-15.4625 1.0925,-1.6925 3.74,-1.9903 4.8,-0.1328 5.7475,8.49 2.7727,19.21272 3.9902,28.74022 0.6975,23.61502 3.1651,47.2151 6.2926,70.6301 0.975,5.635 1.7423,11.37 2.9523,16.9375 1.7825,10.2925 3.8452,20.92 6.6727,30.7875 5.3825,22.50996 13.0972,44.82472 25.4097,64.55972 0.575,1.4425 1.8475,2.4799 3.475,2.1574 2.305,0.3725 6.6951,0.8252 7.8551,-1.9723 -1.71,-1.635 -2.3151,-4.1849 -4.0351,-5.7199 -3.3375,-6.395 -6.8073,-12.8127 -10.4473,-19.0352 -1.7175,-3.7075 -3.4527,-7.515 -5.5402,-10.98 -2.545,-6.32746 -5.4,-12.61238 -7.725,-19.00738 -1.22,-4.005 -2.4599,-8.49 -4.0899,-12.1625 -1.065,-5.195 -2.9023,-10.325 -4.4273,-15.425 -1.76,-7.5275 -3.7003,-15.13266 -5.4328,-22.67266 -1.025,-5.205 -2.0347,-10.43968 -3.0922,-15.62968 -0.4225,-4.2075 -1.3652,-8.39258 -1.9227,-12.59258 -2.815,-20.815 -4.3725,-41.85766 -3.6,-62.86016 0.4025,-4.09 0.5301,-8.45 2.6051,-12.1125 1.3775,-2.27 4.2323,-1 5.4598,0.7125 1.7375,2.4975 2.6401,5.46272 3.5351,8.32772 0.1575,1.4775 0.4274,2.9947 1.0449,4.3547 -0.06,5.055 -0.3222,10.1753 0.1903,15.2078 0.2975,10.95252 1.5825,21.90244 2.7875,32.78244 1.7825,20.89 3.7624,41.78008 6.1449,62.61758 0.2675,3.19 1.2775,6.2725 2.5625,9.1875 0.95,-0.2225 0.7173,-1.695 0.6273,-2.35 -3.9625,-22 -5.3,-44.36258 -7.35,-66.59258 -0.5025,-6.7525 -0.7747,-13.54016 -1.3472,-20.28516 -0.02,-3.99 -0.065,-8.29008 -0.5,-12.09258 0.1875,-9.5425 -0.023,-19.1025 0.08,-28.65 2.7325,-0.3075 3.4577,3.14758 4.4152,5.04258 2.7325,9.595 4.3375,19.51764 5.325,29.39766 0.54,6.72 0.9348,13.44742 0.7723,20.19492 -0.285,18.1675 3.6525,36.05516 8.33,53.49766 -0.07,16.7 2.8476,33.22218 4.9551,49.74218 0.625,4.83248 1.14,10.10514 2.45,14.58504 0.3925,1.4775 0.7102,6.2026 3.3102,4.6051 1.395,-3.5525 -0.2803,-7.6124 -0.3703,-11.2824 -0.1425,-3.64746 -0.5375,-7.29508 -0.975,-10.91008 -1.025,-13.63 -2.3299,-27.24742 -3.5149,-40.86992 -0.1175,-4.76 -2.3048,-9.14492 -4.4648,-13.28242 -4.5225,-11.48 -6.1178,-24.26024 -5.0528,-36.54024 0.053,-0.285 0.3178,-3.40742 0.8778,-1.99492 8.685,40.9625 25.6074,79.72484 45.7074,116.25228 1.5525,3.385 3.4574,6.6726 5.4949,9.7726 2.47,4.845 5.6076,9.3475 8.5801,13.9075 1.63,2.825 5.2598,4.7626 8.4648,3.4726 1.3525,-0.49 1.5028,-2.35 0.7528,-3.4125 -4.1625,-6.475 -9.3051,-12.2349 -13.8426,-18.4324 -28.8175,-39.98492 -44.835,-87.56758 -55.5125,-135.22258 -3.005,-13.9275 -5.3574,-28.65266 -7.9949,-42.24766 -2.1975,-7.5525 -7.8401,-16.28976 -16.6801,-16.07226 -4.5874,-1.77352 -9.5947,-3.62342 -14.5621,-3.57306 z m -34.918,62.11798 c -0.22,1.6025 -0.5149,3.19258 -0.8949,4.76758 -6.125,28.29 -17.1501,55.22226 -28.7176,81.65976 -3.055,7.8275 -8.0951,14.61266 -11.9351,22.02266 -1.375,1.5625 -2.3399,3.44262 -3.2649,5.29762 -3.9725,6.33246 -8.1925,12.52976 -11.9875,18.97726 -2.46,3.3175 -4.8825,6.7027 -7.025,10.2352 -0.42,0.58 -0.8375,1.1723 -1.25,1.7723 -2.455,3.2025 -4.9175,6.4077 -7.25,9.7027 -1.1525,1.0875 -1.6673,2.6772 -1.5273,4.2547 -0.21,2.3325 2.1397,3.4976 4.1172,3.7851 l 1.3203,0 c 7.2825,-3.5275 10.6023,-11.665 14.5848,-18.2675 14.5925,-27.02 27.9224,-54.77488 39.1199,-83.38238 6.255,-18.565 12.0378,-37.46492 14.7078,-56.91992 -0.01,-1.24 0.6298,-3.02008 0,-3.90508 z m 22.2375,34.63242 c -0.285,1.95 -0.6676,3.89266 -0.8101,5.86016 -4.59,26.4675 -10.5749,52.7375 -18.5824,78.3875 -4.175,12.4849 -7.9249,25.1297 -12.1399,37.5847 -4.2375,5.0475 7.4751,7.53 6.9676,1.225 6.31,-21.2 11.8575,-42.67486 16.3875,-64.34486 3.8,-17.24 8.2073,-34.58726 8.3348,-52.33476 0.1634,-0.66474 0.1423,-1.11976 0.033,-1.38164 0.065,-1.7032 0.175,-3.44656 -0.1903,-4.9961 z m 21.4024,37.85742 c -0.4175,6.605 -0.3298,14.15532 0.3027,21.12032 0.067,1.8325 -0.1301,3.71984 0.3199,5.52734 0.185,2.5625 -0.1175,6.365 0.5075,8.45 -0.03,0.15 -0.09,0.45508 -0.1176,0.60508 0.1125,10.9175 -0.07,22.0097 0.6125,32.8097 0,0.1125 0.01,0.3402 0.01,0.4527 0.7925,4.5725 -2.205,11.3573 1.9375,14.7598 2.4075,2.4375 8.9248,1.9876 9.4523,-2.0774 -0.085,-3.3275 -0.925,-6.625 -1.455,-9.905 -0.6025,-4.045 -1.1575,-8.4925 -2.0575,-12.22 -0.2175,-1.0475 0.095,-2.3 -0.4699,-3.255 -1.0025,-6.6425 -1.9576,-13.32986 -3.3226,-19.90738 -0.3725,-4.2925 -1.2776,-8.55242 -1.9551,-12.80742 -0.8325,-5.4125 -1.6998,-11.00742 -2.6848,-16.29492 l 0.022,-0.21524 c -0.3025,-2.36 -0.7875,-4.68758 -1.1,-7.04258 z m 51.825,29.97266 c 0.2525,1.2975 0.5152,2.6 0.9277,3.8625 1.2425,5.80002 2.6651,11.65508 4.3301,17.33508 2.6425,10.885 5.6048,21.7024 8.7773,32.4449 2.335,1.96 6.7125,2.2073 8.97,0.1348 1.065,-0.57 1.8551,-2.57 0.9976,-3.55 -1.9625,-4.425 -3.8901,-9.0599 -6.3426,-13.1524 -1.1,-3.5175 -2.9873,-6.8425 -4.7023,-10.0625 -0.875,-2.8175 -2.3225,-5.45 -3.7125,-8.0375 -0.625,-2.0224 -1.6902,-3.9448 -2.7602,-5.73976 -1.2175,-3.335 -2.9899,-6.48996 -4.4949,-9.71246 -0.6925,-1.0725 -0.7727,-3.02016 -1.9902,-3.52266 z m -149.4774,6.30742 c -1.205,1.17 -1.9873,2.6927 -2.7898,4.1602 -4.7675,6.52746 -10.1177,12.58476 -15.5777,18.52726 -1.6175,1.285 -3.1499,2.6874 -4.4399,4.3074 -0.5675,0.485 -1.16,0.9526 -1.75,1.4176 -1.305,1.0275 -2.5776,2.105 -3.7426,3.2925 -3.3225,2.4675 -6.5924,5.0849 -9.7199,7.7774 -2.795,1.425 -5.2051,3.4675 -7.8351,5.1625 -2.8925,1.635 -5.75504,3.325 -8.69504,4.875 l 0,0.225 c 1.9075,1.195 4.1749,1.4153 6.35244,0.9828 6.8325,-0.6225 13.1752,-4.1751 18.1777,-8.7301 0.91,-0.655 1.8324,-1.3276 2.4149,-2.3051 1.6975,-0.925 2.9,-2.45 4.005,-3.9875 0.065,-0.062 0.1925,-0.1875 0.2575,-0.25 8.605,-9.1075 15.0427,-20.0625 21.0277,-31.01236 0.8975,-1.415 1.7173,-2.8776 2.3148,-4.4426 z"
                 inkscape:connector-curvature="0" />
            </g>
          </g>
        </svg>
        `
    },
    "Libra": {
        "Aries": [86, `<h3>When Aries and Libra come together in a love affair, the inherent polarity of the Zodiac is invoked.</h3>
        <p>Aries and Libra are directly opposite one another in the Zodiac — 180 degrees apart. Each Sign possesses qualities that the other lacks; combined with Libra’s natural yen for harmony, this can be a relationship that enjoys great balance. Aries is the Sign of Self while Libra is the Sign of Partnership, and the differences continue: Aries is impulsive, excitable and ready to jump right into something new and exciting, while Libra is indecisive, peace-loving and prefers a calm, smooth approach. Aries can learn from Libra that their own way isn’t necessarily the best way.</p>`],
        "Taurus": [67, `<h3>When Taurus and Libra come together in a love affair, it can be the unification of two halves of a whole.</h3>
        <p>These two Signs are thought of as being karmically linked. They’re both looking for security in a relationship and they share a love of art, poetry and culture. This relationship may start slowly as, on the surface, they might have few common interests. However, once they understand one another they may learn they have much more in common than was first apparent.</p>`],
        "Gemini": [94, `<h3>When Gemini and Libra come together in a love affair, they enjoy a great relationship based on intellectual interests and mental agility.</h3>
        <p>Dual-natured Gemini loves Libra’s balance, and Libra is always entertained by the chatty, brainy Twins. Libra loves art and beauty while Gemini loves the beauty of an idea, but these loves aren’t far off from one another.</p>`],
        "Cancer": [43, `<h3>When Cancer and Libra make a love match, they give to one another important things that each lacks.</h3>
        <p>Both Signs seek a secure, assured relationship and will enjoy their shared appreciation for beauty and luxury — especially when it comes to their domestic environment. These two can blend their energies harmoniously if they choose to work toward a common goal. Though this pairing may progress more slowly than some others, and at first they may fear that they have little else in common than their mutual needs for companionship and love of beauty. However, the more they get to know one another, the better each individual in this Cancer-Libra love match will recognize and respect positive qualities in the other.</p>`],
        "Leo": [98, `<h3>When Leo and Libra join together in a love match, theirs is an agreeable union.</h3>
        <p>Being situated two signs apart in the Zodiac, Leo and Libra experience a deep understanding of the inner-workings of the other. When the Lion’s unbounded energy mixes with Libra’s natural sense of harmony, this is a romance of great balance. Leo and Libra are both outlandish versus reserved, direct versus peace loving. They can enjoy a very smooth relationship because each can appreciate and benefit from the positive attributes of the other.</p>`],
        "Virgo": [68, `<h3>When Virgo and Libra join together in a love match, it can be like puting two puzzle pieces together.</h3>
        <p>Each locks into the other and sits comfortably in place. Both Signs seek security in partnership, and they share a love of beauty and culture. They can work together efficiently and smoothly because they desire similar rewards. The Virgo-Libra relationship may trickle along in the beginning, but it will rev up once both partners grow to respect one another.</p>`],
        "Libra": [74, `<h3>When two Libras come together in a love affair, they form one of the most agreeable, romantic and well-balanced relationships around.</h3>
        <p>Harmony and aesthetics are of utmost importance to Libra; two Libras together bring their magically balanced and beautiful touch to everything they do together. Libra is the Sign of Partnership; Libra loves to be in love, and two together spells relationship bliss. If they’re just dating, they spend their time at romantic movies and coffee houses; if they’re cohabiting, their house looks like an art gallery, full of the finest and loveliest of everything.</p>`],
        "Scorpio": [35, `<h3>When Libra and Scorpio come together in a love match, they tend to make a very emotionally connected and mutually satisfying union.</h3>
        <p>Though Scorpio is a brooder who can get lost in the confusing welter of their own emotions, Libra’s proclivity for balance and harmony helps keep Scorpio even. Scorpio can return the favor to Libra with their characteristic powers of focus, a trait that Libra usually lacks. These two are very compatible due to their similar needs in a love relationship: Libra is the Sign of Partnership, and Libra is happiest when in a well-balanced and intimate relationship, while Scorpio thrives on emotional and sexual intimacy with their mate. These two Signs can make a very loyal, close and satisfying partnership.</p>`],
        "Sagittarius": [74, `<h3>The merging of Libra and Sagittarius can be paradise found for both Signs; this combination is a harmonious one, to say the least.</h3>
        <p>Signs that are two positions apart in the Zodiac tend to have a very deep, special connection and understanding of one another. Sagittarius, the journeyer, is constantly in search of wisdom. Libra has a mind keen for art, beauty and aesthetics; Libra makes a stimulating companion for Sagittarius on their travels and adds much to Sagittarius’s experience. The relationship always feels new because these two keep it exciting — and yet their natural understanding of one another makes them feel like intimates from the beginning. Together they will reach new horizons in love and in life.</p>`],
        "Capricorn": [55, `<h3>When Libra and Capricorn come together in a love match, they can be a good couple — if they can uncover their sometimes difficult to find similarities.</h3>
        <p>On the surface, these two couldn’t be more different: While Capricorn is quiet and unassuming, Libra tends to be a social butterfly, delighting in visiting with other people. Capricorn is concerned with hard work as a means toward career advancement and recognition; Libra is concerned with beauty, art and balance in life and relationships. This is not to say, however, that there is no meeting point for these two; if they are coming from a base of mutual love and respect, they can work to find their common ground.</p>`],
        "Aquarius": [90, `<h3>When Libra and Aquarius join in a love match, their relationship can serve to heighten and strengthen both Signs’ consciousness.</h3>
        <p>These two connect on a high mental level; they share a love of art, people and culture; they both abhor restrictive influences in their lives. They are likely to get along well because they have such similar needs and will not require more of one another than they’re both willing to give. Both Signs are also very energetic, enthusiastic types; this relationship is not likely to become stagnant.</p>`],
        "Pisces": [88, `<h3>When Libra and Pisces come together in a love affair, theirs is a congenial and even-tempered romance.</h3>
        <p>These two Signs are very compatible, making for a truly smooth-sailing love affair. Both Signs are attuned to life’s aesthetic side, but they also have much to offer one another: When Pisces gets lost in a fantasy, Libra can apply that Libran proclivity for balance to help get Pisces back on track, and Pisces can return the favor by helping Libra see the beauty in love and empathy. This is an honest partnership that values truth and harmony in itself and in the world.</p>`],
        "svg": `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
        <!-- Created with Inkscape (http://www.inkscape.org/) -->
        
        <svg
           xmlns:dc="http://purl.org/dc/elements/1.1/"
           xmlns:cc="http://creativecommons.org/ns#"
           xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
           xmlns:svg="http://www.w3.org/2000/svg"
           xmlns="http://www.w3.org/2000/svg"
           xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
           xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
           width="50.86133mm"
           height="50.86133mm"
           viewBox="0 0 718.79998 718.79998"
           id="svg2"
           version="1.1"
           inkscape:version="0.91 r13725"
           sodipodi:docname="LibraDrawing5.svg">
          <defs
             id="defs4">
            <filter
               inkscape:label="Modified combined Lighting"
               inkscape:menu="Bevels"
               inkscape:menu-tooltip="Basic specular bevel to use for building textures"
               style="color-interpolation-filters:sRGB"
               id="filter125483"
               height="1.04"
               width="1.04"
               y="-0.02"
               x="-0.02">
              <feGaussianBlur
                 stdDeviation="6"
                 in="SourceGraphic"
                 result="result0"
                 id="feGaussianBlur125485" />
              <feDiffuseLighting
                 lighting-color="#ffffff"
                 diffuseConstant="1"
                 surfaceScale="4"
                 result="result5"
                 id="feDiffuseLighting125487">
                <feDistantLight
                   elevation="45"
                   azimuth="235"
                   id="feDistantLight125489" />
              </feDiffuseLighting>
              <feComposite
                 k1="1.4"
                 in2="SourceGraphic"
                 in="result5"
                 result="fbSourceGraphic"
                 operator="arithmetic"
                 id="feComposite125491"
                 k2="0"
                 k3="0"
                 k4="0" />
              <feGaussianBlur
                 result="result0"
                 in="fbSourceGraphic"
                 stdDeviation="6"
                 id="feGaussianBlur125493" />
              <feSpecularLighting
                 specularExponent="25"
                 specularConstant="1"
                 surfaceScale="4"
                 lighting-color="#ffffff"
                 result="result1"
                 in="result0"
                 id="feSpecularLighting125495">
                <feDistantLight
                   azimuth="235"
                   elevation="45"
                   id="feDistantLight125497" />
              </feSpecularLighting>
              <feComposite
                 k3="1"
                 k2="1"
                 operator="arithmetic"
                 in="fbSourceGraphic"
                 in2="result1"
                 result="result4"
                 id="feComposite125499"
                 k1="0"
                 k4="0" />
              <feComposite
                 operator="in"
                 result="fbSourceGraphic"
                 in2="SourceGraphic"
                 in="result4"
                 id="feComposite125501" />
              <feColorMatrix
                 result="fbSourceGraphicAlpha"
                 in="fbSourceGraphic"
                 values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
                 id="feColorMatrix125639" />
              <feGaussianBlur
                 id="feGaussianBlur125641"
                 stdDeviation="1.1000000000000001 1.1299999999999999"
                 result="blur"
                 in="fbSourceGraphic" />
              <feColorMatrix
                 id="feColorMatrix125643"
                 values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 50 0 "
                 result="colormatrix" />
              <feComposite
                 id="feComposite125645"
                 in2="fbSourceGraphic"
                 in="colormatrix"
                 operator="in" />
            </filter>
            <filter
               inkscape:collect="always"
               style="color-interpolation-filters:sRGB"
               id="filter126657"
               x="-0.099000007"
               width="1.198"
               y="-0.099000007"
               height="1.198">
              <feGaussianBlur
                 inkscape:collect="always"
                 stdDeviation="2.4750002"
                 id="feGaussianBlur126659" />
            </filter>
          </defs>
          <sodipodi:namedview
             id="base"
             pagecolor="#ffffff"
             bordercolor="#666666"
             borderopacity="1.0"
             inkscape:pageopacity="0.0"
             inkscape:pageshadow="2"
             inkscape:zoom="0.73594882"
             inkscape:cx="359.39999"
             inkscape:cy="359.39999"
             inkscape:document-units="px"
             inkscape:current-layer="layer1"
             showgrid="false"
             inkscape:window-width="1366"
             inkscape:window-height="705"
             inkscape:window-x="-8"
             inkscape:window-y="-8"
             inkscape:window-maximized="1"
             fit-margin-top="0"
             fit-margin-left="0"
             fit-margin-right="0"
             fit-margin-bottom="0" />
          <metadata
             id="metadata7">
            <rdf:RDF>
              <cc:Work
                 rdf:about="">
                <dc:format>image/svg+xml</dc:format>
                <dc:type
                   rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
                <dc:title></dc:title>
              </cc:Work>
            </rdf:RDF>
          </metadata>
          <g
             inkscape:label="Layer 1"
             inkscape:groupmode="layer"
             id="layer1"
             transform="translate(729.21106,230.99174)">
            <g
               id="g91385">
              <circle
                 transform="matrix(10,0,0,10,-3421.7007,-4530.6759)"
                 id="circle124420-7"
                 r="30"
                 cy="465.90842"
                 cx="305.18896"
                 style="fill:#000000;fill-opacity:1;stroke:none;stroke-opacity:1;filter:url(#filter126657)" />
              <circle
                 transform="matrix(10,0,0,10,-3421.7007,-4530.6759)"
                 id="circle124420"
                 r="30"
                 cy="463.90842"
                 cx="303.189"
                 style="fill:#00c403;fill-opacity:1;stroke:none;stroke-opacity:1;filter:url(#filter125483)" />
              <path
                 style="opacity:0.7"
                 id="path4"
                 d="m -425.44537,-70.245584 c -13.055,0.485 -20.4525,14.762344 -19.0875,26.552344 0.4475,5.27 2.76524,12.2375 -2.62226,15.7625 -8.235,4.75 -17.31524,9.5925 -22.10274,18.1500004 -6.5075,2.2525 -12.8675,6.062734 -16.1,12.390234 -3.8525,7.8824996 -3.37226,17.2174996 -1.03476,25.4749996 -2.66,9.0375 -3.68516,19.529844 -0.26016,28.589844 0.3775,4.49 7.35492,0.942656 7.16992,5.222656 -1.5275,1.995 -4.57992,-0.350234 -6.48242,1.222266 -0.84,18.725 0.37008,37.69008 5.61758,55.76758 0.7025,3.99 2.69008,8.86773 -0.36992,12.37774 -3.89,5.1025 -3.4075,12.63476 0.275,17.69726 0.96,1.475 3.46,2.32992 4.6125,0.64492 2.29,-3.98 1.19734,-8.935 3.20234,-13.0375 5.33,-12.655 4.89508,-26.68984 5.84258,-40.152344 0.04,-11.3075 0.82758,-22.872344 -2.20742,-33.902344 -1.235,-3.94 0.2425,-8.015234 1.6,-11.702734 1.0075,-0.1725 1.26758,1.0525 1.69258,1.7 4.4025,8.72 9.0275,17.529922 15.825,24.657422 0.8325,0.665 -0.19266,1.497734 -0.53516,2.127734 -6.34,9.115 -10.11,20.607266 -8.05,31.722266 1.4375,7.7725 9.02992,12.21508 16.35742,13.10508 1.9625,0.075 0.92016,2.44765 -0.46484,2.53515 -3.575,0.085 -7.035,-0.98265 -10.3,-2.33515 -8.3425,12.69 -13.1275,28.07016 -12.5375,43.33516 0.1475,3.8325 2.25984,7.03758 3.98984,10.29258 -3.3925,3.6775 -7.10758,-1.47 -7.53008,-4.9375 -0.605,-3.82 -0.545,-7.69516 -0.5375,-11.54766 1.5175,-13.39 6.85016,-25.96516 12.74766,-37.94766 -1.5425,-1.8425 -3.66016,-3.14469 -5.46016,-4.72969 -3.4075,6.965 -6.68218,14.00735 -9.51718,21.22735 -2.5375,13.9275 -0.98008,29.24234 -8.69258,41.78984 -3.4075,6.4775 -10.58774,10.13516 -13.56524,16.93516 -7.09,15.035 -9.81742,31.59484 -13.59492,47.65234 -3.57,11.7975 -13.2475,21.53 -24.5125,26.2375 -2.855,1.5325 -6.40492,0.57258 -9.13242,2.30508 l 0,2.3 c 2.925,2.5375 6.87258,0.53258 10.26758,0.74258 7.5525,0.2475 15.07758,1.05234 22.63008,1.37734 l 0.1875,0.14766 2.8625,0 0.15976,-0.16992 c 3.785,0.075 6.83016,-3.36266 6.21016,-7.14766 -0.29,-9.7325 1.69,-19.87484 7.5,-27.86484 4.115,-3.9675 8.56492,-7.59758 12.64492,-11.60508 7.615,-9.04 8.79766,-21.48742 9.27266,-32.81992 7.78,-3.795 14.27476,-10.42516 17.84726,-18.31016 2.8425,-10.0975 6.20992,-20.65992 13.50742,-28.49492 7.4825,-7.4375 13.99024,-17.54992 13.06524,-28.45743 -13.9075,-7.7775 -16.01774,-27.30773 -8.57774,-40.27773 0.5225,-1.9275 4.8625,-2.394688 4.05,0.220312 -3.3225,7.0575 -4.035,15.257344 -2.625,22.889848 1.2275,5.6175 6.21532,9.4425 11.22032,11.625 -0.9325,6.74 0.32242,14.09766 4.75742,19.43516 11.93,15.43 25.72008,29.25992 39.03008,43.46992 5.2175,6.38 7.84226,14.495 8.63476,22.6125 0.33,4.0625 2.17508,7.77758 4.34258,11.15508 6.1425,8.9925 13.98508,17.145 23.60508,22.3875 1.33,-0.72 -0.32758,-7.71 2.94492,-6.2375 2.59,3.7375 -0.57766,9.05468 0.88984,13.17968 2.215,4.1 3.6525,8.57532 5.0125,13.00782 -0.007,4.39 0.45274,8.79984 1.62774,13.03984 0.63,1.755 2.88734,2.05484 4.47734,2.35234 8.005,-0.2875 16.01,-0.8375 24.0125,-1.25 5.6925,-0.82 11.36508,1.43774 17.04258,0.46524 3.41,-0.115 3.49234,-5.45274 0.66484,-6.50274 -2.1625,-1.02 -4.65242,0.34032 -6.86992,-0.56718 -17.4875,-4.6775 -31.36226,-18.90774 -37.62226,-35.65274 -3.0575,-7.1075 -4.41532,-14.77242 -6.94532,-22.05742 -1.9,-5.06 -4.6225,-9.75234 -6.82499,-14.67734 -2.3825,-5.5425 -7.83727,-9.02508 -10.30977,-14.50508 -0.5025,-5.215 0.27492,-11.40766 -3.54258,-15.64766 -5.2375,-5.7225 -8.74508,-12.94758 -10.19258,-20.55508 -3.0275,-15.7025 -11.13734,-30.00242 -21.42734,-42.08242 -2.3075,-5.080002 -3.255,-10.809846 -6.55,-15.439846 -2.6475,-4.8475 -7.11766,-8.220234 -10.58516,-12.415234 -1.965,-3.0925 -2.14742,-6.99 -1.26992,-10.475 1.7325,-8.095 1.2525,-16.45 2.6,-24.5875 1.81,-2.73 4.0725,-5.367266 4.6,-8.722266 2.0125,-7.5875 2.33008,-15.69 0.45508,-23.3374996 6.77,-0.2525 13.67484,0.699922 20.35234,-0.730078 6.9,0.035 8.725,-8.1075 10.8125,-12.925 3.015,3.105 0.52008,9.207578 -0.19492,12.730078 16.55,3.035 33.36984,-1.412422 49.62734,-4.41992199 6.17,-1.73250001 12.35516,0.434688 18.02266,2.76718799 0.22,7.8899996 0.11984,15.8326556 0.0148,23.7351556 -0.965,0.315 -1.94218,-0.177656 -2.84218,-0.472656 -6.92,-2.59 -15.07024,-1.492266 -21.04024,2.865234 -4.5825,3.4125 -9.85242,7.154844 -15.85742,6.639844 -4.4175,-0.4475 -7.60742,-3.677266 -10.89492,-6.272266 -1.54,-0.79 -2.3775,1.1825 -1.7125,2.275 1.8725,4.11 4.67984,8.009688 8.56484,10.404688 -6.5575,19.9 -13.68976,39.645312 -20.54726,59.45781 -0.36,1.22 -1.72031,1.39485 -2.72031,1.82735 2.4325,11.78 14.49515,19.85507 26.37265,18.91757 11.795,0.7175 22.4625,-7.61242 26.275,-18.49492 -3.9175,-1.8125 -3.92516,-7.070154 -5.53516,-10.510154 -5.345,-16.05 -11.89484,-31.782578 -16.68984,-47.955078 9.6975,-0.2775 18.14734,-7.26 27.98984,-5.625 5.7,0.5075 9.56266,5.592734 11.18516,10.477734 0.9575,-7.135 8.42992,-11.725312 15.31992,-10.695312 7.875,1.14 15.36774,5.470312 23.15274,6.045312 -6.04,18.6525 -12.76008,37.232188 -19.00508,55.879688 -0.26,1.135 -0.95016,2.1875 -2.32266,2.0125 -0.525,2.7025 1.62992,4.91258 2.90742,7.06758 6.9825,11.115 22.33758,14.73992 34.06758,9.59492 6.975,-2.985 11.97758,-9.16977 15.41758,-15.74727 l 0,-1.11015 c -1.1,0.35 -2.55266,0.15265 -2.73516,-1.26485 -6.845,-19.877496 -14.09468,-39.630074 -20.50468,-59.655074 3.2175,-3.125 6.61484,-6.479922 8.30234,-10.757422 0.63,-1.2125 -0.50492,-2.739922 -1.90742,-2.207422 -3.175,2.69 -6.34508,5.822422 -10.50508,6.869922 -5.8,0.55 -10.68008,-3.27 -14.98008,-6.625 -6.84,-5.2125 -16.46992,-6.330156 -24.26992,-2.685156 -0.6,0.445 -0.47016,-0.564922 -0.58516,-0.919922 0.085,-2.7025 0.57766,-5.5775 0.0227,-8.225 0.4625,-4.7125 -0.42516,-9.5449216 0.38984,-14.2074216 3.7575,-1.26 7.94758,-2.057422 10.95508,-4.869922 2.6625,-2.5625 1.8475,-6.695156 0.2125,-9.5726564 -2.7225,-3.905 -7.95484,-4.707344 -12.35234,-4.739844 -5.975,1.1725 -11.94992,4.434688 -18.15742,2.767188 -7.8375,-1.47 -15.62508,-3.2125 -23.55508,-4.1125 -1.3475,-0.195 -2.74008,-0.609766 -4.10508,-0.322266 -2.665,-0.1325 -5.32734,0.232422 -7.96484,0.557422 -1.4175,0.025 -2.85774,-0.110078 -4.20274,0.432422 -4.1425,-0.155 -8.31007,1.4875 -12.40507,0.1875 -6.2425,-1.5775 -12.67985,-1.492344 -19.06485,-1.364844 -13.0975,-3.3775 -26.6275,-7.039922 -40.3,-7.232422 -2.0125,0.0725 -4.595,-0.272734 -6.0875,1.422266 -1.505,0.595 -2.3825,3.990156 -4.175,2.247656 -1.0175,-2.37 0.91,-4.967578 1.775,-7.155078 3.3325,-5.72 4.74766,-12.457344 8.86016,-17.727344 3.37,0.045 7.17734,0.3375 9.43984,-2.725 1.5875,-0.89 1.81508,-4.187578 4.06758,-3.480078 0.49,6.37 -7.58524,9.727422 -12.94024,9.294922 -2.5,5.36 -5.07718,10.705156 -7.45468,16.122656 9.29,-1.4875 18.76734,-0.172578 27.90234,1.694922 0.6225,-3.29 5.13,0.01758 5.8375,-3.257422 0.58,-5.6225 -0.57008,-11.355156 -0.44258,-17.022656 1.15,-1.5025 2.64024,-2.737344 3.50274,-4.464844 0.94,-1.135 0.14484,-2.810156 -0.0227,-4.097656 -0.605,-2.2825 -1.95758,-4.407656 -3.83008,-5.860156 -1.135,-1.365 -2.37492,-2.6975 -3.98242,-3.5 -5.95746,-5.34 -14.0723,-5.809844 -21.5648,-7.014844 l -0.90782,0 z m 14.21641,79.5136724 c 1.45344,0.01712 1.94992,1.7638276 2.37617,2.9214836 0.4075,6.8625 -2.00226,14.0825 -7.05976,18.8625 -5.9525,5.2125 -15.11282,5.239766 -21.80782,1.459766 -3.82,-1.7075 -6.41734,-5.142266 -9.52734,-7.697266 4.2725,14.2775 9.92234,29.242266 10.35234,43.909766 -3.95,-17.8525 -9.6325,-35.249922 -15.075,-52.682422 4.2525,5.1525 8.43774,11.182578 14.75274,14.217578 7.675,4.335 18.9025,1.767578 22.8125,-6.457422 1.8075,-4.6475 0.87992,-10.075078 3.03242,-14.5300776 0.0489,-0.00312 0.0969,-0.00446 0.14375,-0.0039 z m -63.49375,10.9789056 c 1.5825,7.3875 4.07766,16.137344 11.34766,20.164844 0.415,0.2275 1.75492,0.867422 0.73242,1.169922 -2.885,1.445 -6.59016,0.270234 -8.09766,-2.559766 -3.5475,-5.6 -3.21742,-12.4475 -3.98242,-18.775 z m 134.28984,24.807422 c 6.795,19.065 13.3675,38.815156 19.7125,58.210154 -12.4725,0.5775 -25.87976,0.05 -38.70976,0.2625 -0.875,0.205 -1.7125,-0.81515 -1.2125,-1.67265 6.7275,-18.937504 13.40977,-37.890004 20.20976,-56.800004 z m 86.32384,0.478516 c 0.032,0.0016 0.0667,0.0061 0.1039,0.01406 6.3825,18.5925 12.8425,37.1625 19.275,55.737498 0.205,0.865 0.82226,2.62227 -0.90274,2.03477 -6.4125,0.007 -12.80742,0.22258 -19.25742,0.11758 -0.9725,-0.2575 -1.93242,-0.13993 -2.89492,-0.0199 -5.4225,0.21 -10.91734,-0.22993 -16.35234,0.0426 -0.7075,-0.1275 -0.01,-1.37008 0.0574,-1.58008 6.475,-18.450002 12.94226,-36.900158 19.38476,-55.360158 0.17578,-0.339844 0.10554,-1.009034 0.58634,-0.986328 z m -137.57344,62.967188 c 0.28781,-0.007 0.57609,0.008 0.86484,0.0469 1.1575,6.165 3.50477,12.01508 5.69727,17.86758 2.1325,6.37501 6.62515,11.55235 9.91015,17.33985 6.0875,8.995 10.10008,20.59742 6.59258,31.33242 -0.0825,1.36 -2.91266,1.44242 -2.02266,-0.24258 0.5625,-4.7275 0.6825,-9.55218 0.125,-14.27968 -1.6975,-6.935 -5.79984,-12.945 -9.68984,-18.8125 -4.835,-6.8375 -8.87023,-14.27001 -12.00273,-22.01251 -4.35,3.8125 -10.77,4.16485 -15.775,1.52735 7.1025,-1.3775 11.5325,-7.465 15.4375,-12.675 0.2875,-0.0538 0.57507,-0.0843 0.86289,-0.0918 z m -84.52774,84.72852 c 1.88778,0.009 3.26218,2.07374 3.05,3.94844 -5.335,-1.3975 -10.05258,2.41242 -12.86758,6.51992 -0.6325,0.7475 -0.43742,-0.59992 -0.23242,-0.94492 1.88,-3.99 4.9725,-7.86032 9.2125,-9.39532 0.2875,-0.0891 0.56782,-0.12946 0.8375,-0.12812 z"
                 inkscape:connector-curvature="0" />
            </g>
          </g>
        </svg>`
    },
    "Scorpio": {
        "Aries": [51, `<h3>When Aries and Scorpio come together in a love match, it can be the kind of relationship where they both wonder how they ever managed apart.</h3>
        <p>Both Signs love power and they can achieve just about anything — as long as they learn to share the spotlight. Scorpio is very focused; once they set their sights on Aries, Aries is most likely powerless to resist! Scorpio has a deeper and more complex devotion to this relationship than does Aries.</p>`],
        "Taurus": [89, `<h3>When Taurus and Scorpio come together in a love affair, their union is nothing if not intense, whether that’s in a positive or a negative way.</h3>
        <p>They are opposite Signs in the Zodiac, giving them a special, complex connection. They can combine to make a whole, each partner’s strengths balancing the other’s weaknesses. Their sexual attraction is likely to be off the charts! Taurus and Scorpio have tons in common, but because their personalities are so powerful, they often swing between passionate love and passionate disagreement!.</p>`],
        "Gemini": [29, `<h3>When Gemini and Scorpio come together in a love affair, they’ll need to learn to understand and accept one another’s differences — and if they can, they will be a nearly unbreakable couple.</h3>
        <p>Where Gemini is adaptable, intellectual, outgoing and chatty, Scorpio tends to be secretive, focused, intense and determined. Gemini tends to take things lightly, including their lover; Scorpio, on the other hand, has a very deep need for emotional connection and intimacy. Scorpio is generally very loyal to their lover and very connected to the relationship.</p>`],
        "Cancer": [94, `<h3>When Cancer and Scorpio make a love match, the resulting relationship draws together the energies of two emotionally intense Signs.</h3>
        <p>Signs such as these often combine well, each partner’s strengths balancing the other’s weaknesses. These Signs feel a strong sexual attraction, and when they are together the temperature in the room tends to rise! Cancer and Scorpio have a great deal in common, and much potential to keep their relationship passionate and going strong.</p>`],
        "Leo": [51, `<h3>When Leo and Scorpio join together in a love match, the result is usually a dynamic and intense union.</h3>
        <p>They are well tuned in to one another’s needs; Scorpio demands respect and to be wanted while Leo needs to be adored and complimented constantly. They are both extremely loyal, and often possessive of one another. Both members of this love match are able to give the other what they need and while enjoying one another’s strengths.</p>`],
        "Virgo": [89, `<h3>When Virgo and Scorpio join together in a love match, these Signs that are two apart in the Zodiac are brought together.</h3>
        <p>Their placement gives the relationship an intense karmic bond. The Virgo-Scorpio couple is loyal and deep, with very strong ties. Usually, this couple will stay away from crowds; they aren’t too inclined to go to parties or dances, but alone they can form a very fulfilling union.</p>`],
        "Libra": [35, `<h3>When Libra and Scorpio come together in a love match, they tend to make a very emotionally connected and mutually satisfying union.</h3>
        <p>Though Scorpio is a brooder who can get lost in the confusing welter of their own emotions, Libra’s proclivity for balance and harmony helps keep Scorpio even. Scorpio can return the favor to Libra with their characteristic powers of focus, a trait that Libra usually lacks. These two are very compatible due to their similar needs in a love relationship: Libra is the Sign of Partnership, and Libra is happiest when in a well-balanced and intimate relationship, while Scorpio thrives on emotional and sexual intimacy with their mate. These two Signs can make a very loyal, close and satisfying partnership.</p>`],
        "Scorpio": [80, `<h3>When two Scorpions make a love match, it is a fierce tempest of intense passion.</h3>
        <p>Both are obsessed with one another, and they move forward in love, sex and romance at an accelerated — some would say foolish — way. Personal relations are positively steamy but, to the equal and opposite extreme, disputes will also be frenetically powerful. This relationship could go either way: It will either be the most wonderful thing in the world or a destruction of both involved.</p>`],
        "Sagittarius": [29, `<h3>If a Scorpio and a Sagittarius want to make a love match, they should be warned to slow down, take their time getting to know one another on a deep, significant level or else they run the risk of getting way ahead of themselves.</h3>
        <p>This relationship could be over before either partner even realizes it’s started if they’re not careful! Their patience will be very richly rewarded. Sagittarius thrives on change, on the new and the exciting and on the power of positive thought. Scorpio just wants to get closer and strengthen emotional ties. Early in the relationship, Sagittarius could feel hemmed in by Scorpio’s rapt attention and high expectations for love. If Scorpio can control their emotions, these two are in for satisfaction and excitement.</p>`],
        "Capricorn": [96, `<h3>When Scorpio and Capricorn make a love match, they get an opportunity to not only enjoy a loving relationship and learn the value of being a pair, but also to grow and mature as individuals.</h3>
        <p>These two may be wary about sharing themselves with one another at first, and this emotional caution may dampen the initial impact of this relationship. These two tend to be a bit cautious (Capricorn) and pensive (Scorpio), and it takes a while for them to feel comfortable with a significant other. Though they may be shy of getting involved and not the quickest to trust and share, these two Signs will discover that they can have quite a profound connection — one of friendship and deep loyalty.</p>`],
        "Aquarius": [74, `<h3>When Scorpio and Aquarius make a love match, it is a fusion of two very different life philosophies and many very different needs.</h3>
        <p>There is much chance for friction here. Where Scorpio faces their inner emotional world directly and with an intense energy, thinking deeply about the more hidden undercurrents of life, Aquarius takes that same sort of energy and turns it outward. With their unusual, idealistic and, above all else, very social outlook on life, Aquarius seems an odd choice for the more introverted Scorpio. Aquarius needs a crowd to feel stimulated, and they’re always looking around the room for the next interesting person to get to know. Scorpio, on the other hand, desires engaging, probing and very intimate time with their romantic mates. This pair may seem to have very little in common, but they both have such strong wills that, when focused on their relationship, can get them what they need and want.</p>`],
        "Pisces": [97, `<h3>When Scorpio and Pisces make a love match, theirs is a splendid union of much respect and understanding.</h3>
        <p>These mates share the same Element — Water — and thus have keen insight into one another’s minds and hearts. Scorpio is very profound and covert, often caught up in their own secret plans, while Pisces is idealistic and looks for the nuances of a situation. However, Pisces also has a tendency to withdraw into their own mind, and can forgive Scorpio for being mysterious or withdrawn at times.</p>`],
        "svg": `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
        <!-- Created with Inkscape (http://www.inkscape.org/) -->
        
        <svg
           xmlns:dc="http://purl.org/dc/elements/1.1/"
           xmlns:cc="http://creativecommons.org/ns#"
           xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
           xmlns:svg="http://www.w3.org/2000/svg"
           xmlns="http://www.w3.org/2000/svg"
           xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
           xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
           width="50.86133mm"
           height="50.86133mm"
           viewBox="0 0 718.79998 718.79998"
           id="svg2"
           version="1.1"
           inkscape:version="0.91 r13725"
           sodipodi:docname="ScorpioDrawing5.svg">
          <defs
             id="defs4">
            <filter
               inkscape:label="Modified combined Lighting"
               inkscape:menu="Bevels"
               inkscape:menu-tooltip="Basic specular bevel to use for building textures"
               style="color-interpolation-filters:sRGB"
               id="filter125483"
               height="1.04"
               width="1.04"
               y="-0.02"
               x="-0.02">
              <feGaussianBlur
                 stdDeviation="6"
                 in="SourceGraphic"
                 result="result0"
                 id="feGaussianBlur125485" />
              <feDiffuseLighting
                 lighting-color="#ffffff"
                 diffuseConstant="1"
                 surfaceScale="4"
                 result="result5"
                 id="feDiffuseLighting125487">
                <feDistantLight
                   elevation="45"
                   azimuth="235"
                   id="feDistantLight125489" />
              </feDiffuseLighting>
              <feComposite
                 k1="1.4"
                 in2="SourceGraphic"
                 in="result5"
                 result="fbSourceGraphic"
                 operator="arithmetic"
                 id="feComposite125491"
                 k2="0"
                 k3="0"
                 k4="0" />
              <feGaussianBlur
                 result="result0"
                 in="fbSourceGraphic"
                 stdDeviation="6"
                 id="feGaussianBlur125493" />
              <feSpecularLighting
                 specularExponent="25"
                 specularConstant="1"
                 surfaceScale="4"
                 lighting-color="#ffffff"
                 result="result1"
                 in="result0"
                 id="feSpecularLighting125495">
                <feDistantLight
                   azimuth="235"
                   elevation="45"
                   id="feDistantLight125497" />
              </feSpecularLighting>
              <feComposite
                 k3="1"
                 k2="1"
                 operator="arithmetic"
                 in="fbSourceGraphic"
                 in2="result1"
                 result="result4"
                 id="feComposite125499"
                 k1="0"
                 k4="0" />
              <feComposite
                 operator="in"
                 result="fbSourceGraphic"
                 in2="SourceGraphic"
                 in="result4"
                 id="feComposite125501" />
              <feColorMatrix
                 result="fbSourceGraphicAlpha"
                 in="fbSourceGraphic"
                 values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
                 id="feColorMatrix125639" />
              <feGaussianBlur
                 id="feGaussianBlur125641"
                 stdDeviation="1.1000000000000001 1.1299999999999999"
                 result="blur"
                 in="fbSourceGraphic" />
              <feColorMatrix
                 id="feColorMatrix125643"
                 values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 50 0 "
                 result="colormatrix" />
              <feComposite
                 id="feComposite125645"
                 in2="fbSourceGraphic"
                 in="colormatrix"
                 operator="in" />
            </filter>
            <filter
               inkscape:collect="always"
               style="color-interpolation-filters:sRGB"
               id="filter126653"
               x="-0.099000007"
               width="1.198"
               y="-0.099000007"
               height="1.198">
              <feGaussianBlur
                 inkscape:collect="always"
                 stdDeviation="2.4750002"
                 id="feGaussianBlur126655" />
            </filter>
          </defs>
          <sodipodi:namedview
             id="base"
             pagecolor="#ffffff"
             bordercolor="#666666"
             borderopacity="1.0"
             inkscape:pageopacity="0.0"
             inkscape:pageshadow="2"
             inkscape:zoom="0.73734003"
             inkscape:cx="77.304903"
             inkscape:cy="358.04376"
             inkscape:document-units="px"
             inkscape:current-layer="layer1"
             showgrid="false"
             inkscape:window-width="1366"
             inkscape:window-height="705"
             inkscape:window-x="-8"
             inkscape:window-y="-8"
             inkscape:window-maximized="1"
             fit-margin-top="0"
             fit-margin-left="0"
             fit-margin-right="0"
             fit-margin-bottom="0" />
          <metadata
             id="metadata7">
            <rdf:RDF>
              <cc:Work
                 rdf:about="">
                <dc:format>image/svg+xml</dc:format>
                <dc:type
                   rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
                <dc:title></dc:title>
              </cc:Work>
            </rdf:RDF>
          </metadata>
          <g
             inkscape:label="Layer 1"
             inkscape:groupmode="layer"
             id="layer1"
             transform="translate(-770.78894,-1269.0086)">
            <g
               id="g91385">
              <circle
                 transform="matrix(10,0,0,10,-3421.7007,-4530.6759)"
                 id="circle124412-0"
                 r="30"
                 cy="615.90845"
                 cx="455.18896"
                 style="fill:#000000;fill-opacity:1;stroke:none;stroke-opacity:1;filter:url(#filter126653)" />
              <circle
                 transform="matrix(10,0,0,10,-3421.7007,-4530.6759)"
                 id="circle124412"
                 r="30"
                 cy="613.90845"
                 cx="453.18896"
                 style="fill:#00e2ca;fill-opacity:1;stroke:none;stroke-opacity:1;filter:url(#filter125483)" />
              <path
                 id="path4"
                 d="m 1008.9142,1428.6027 c -5.65,3.7925 -6.1677,11.7276 -8.0852,17.7676 -2.0775,12.775 -4.1647,26.3274 -0.5047,39.0199 0.7525,3.1575 2.1698,6.2027 4.2098,8.7352 7.525,9.275 23.7376,8.1874 30.9101,-1.0301 0.88,-1.055 1.6624,-2.2025 2.2149,-3.4625 2.34,-3.675 3.4976,-7.9924 4.2726,-12.2449 0.5125,-2.1 0.7874,-4.2477 0.9649,-6.3977 1.62,-11.81 0.535,-24.0125 -2.9825,-35.38 -0.5575,-1.6825 -1.5825,-4.8176 -3.9675,-3.7551 -1.2875,1.27 -1.7425,3.1726 -2.5825,4.7426 -0.17,0.335 -0.3351,0.6726 -0.4976,1.0101 -1.3975,2.5525 -2.9647,5.0424 -3.9797,7.7824 -2.18,3.7425 -4.2253,7.58 -6.0078,11.525 l -0.2797,0.25 c -4.7225,-5.01 -7.3501,-11.655 -9.7301,-18.0425 l -0.057,-0.195 c -1.6525,-3.0475 -0.1976,-8.2925 -3.2476,-10.325 l -0.65,0 z m 189.5101,7.7227 c -2.5875,3.3875 -4.7651,7.0923 -6.5926,10.9398 -0.047,0.1275 -0.14,0.3849 -0.1875,0.5149 -3.025,6.165 -4.6552,13.0275 -5.2402,19.85 -1.49,12.4 1.6002,25.8127 9.6652,35.5277 7.6225,8.6025 22.5099,5.6323 28.1024,-3.7902 5.345,-7.725 8.0925,-17.0222 9.4675,-26.2422 0.675,-2.2475 0.4675,-4.625 0.9875,-6.9 l 0,-4.0402 c -0.37,-3.42 -0.2,-6.91 -1.0375,-10.27 -0.48,-3.6425 -1.2326,-7.39 -3.2101,-10.5425 -0.755,-1.255 -1.4074,-2.7349 -2.7274,-3.5024 -1.515,1.495 -3.0098,3.0624 -4.0898,4.9074 -2.095,2.775 -3.8227,5.8226 -5.2402,8.9926 -2.2825,2.6125 -2.0574,7.9148 -6.2149,8.3598 -3.295,-0.3425 -4.7626,-3.6448 -5.9601,-6.2973 -1.7875,-4.5575 -3.405,-9.1975 -5.725,-13.525 -0.1601,-0.8616 -0.4091,-1.4435 -0.7125,-1.8031 -0.271,-0.8639 -0.5689,-1.7092 -1.2848,-2.1793 z m -184.1598,67.9531 c -1.6036,0.013 -3.0104,0.4806 -3.1328,2.3692 0.5475,5.9275 3.6848,11.5849 6.7473,16.4324 1.055,2.255 2.5227,4.5502 4.2852,6.2652 1.24,2.6475 4.905,3.4999 7.5875,2.7774 1.205,-0.115 2.6726,0.073 3.6601,-0.7524 1.53,-0.1625 2.8997,-2.1701 1.7297,-3.5051 -2.2875,-4.13 -3.8273,-8.6775 -6.0723,-12.7875 -0.6525,-2.0925 -1.7227,-4.1825 -2.9402,-5.9875 -0.755,-3.8425 -5.2348,-3.8075 -8.2773,-4.475 -0.9735,-0.083 -2.3399,-0.3471 -3.5872,-0.3367 z m 181.0871,7.8317 c -0.7925,3.5675 -2.465,6.8425 -3.725,10.2425 -1.465,2.445 -2.8049,5.0674 -3.9324,7.6649 -1.255,2.4425 -4.1101,4.6428 -3.6176,7.5453 2.545,3.105 8.0625,2.4447 10.5375,-0.4578 3.62,-2.7225 6.7676,-6.4849 9.1926,-10.3399 2.8375,-2.855 4.3201,-7.0024 6.1926,-10.5824 0.9025,-1.85 -1.4852,-0.4875 -2.2402,-0.5 -3.7725,-0.425 -7.41,-1.4874 -10.945,-2.8574 -0.015,-0.5 -1.03,-0.4902 -1.4625,-0.7152 z m -74.7625,0.9976 c -1.4025,0.055 -0.8226,1.6598 -0.4351,2.4598 2.505,3.5775 4.1101,9.3828 0.2176,12.5453 -5.445,3.29 -14.4873,3.2098 -18.0473,-2.3902 -1.205,-3.81 0.2299,-7.5525 1.2199,-11.0325 -4.71,0.24 -7.9427,5.745 -8.1152,10.175 0.4775,4.605 2.9152,9.1524 6.7527,11.8149 l -0.073,0.1652 c -2.8575,2.8 -5.7673,5.7148 -7.9648,9.0598 -1.975,0.965 -2.2678,4.4253 -4.8153,4.2203 -8.2125,0.7575 -16.1474,-1.5477 -24.0324,-3.4402 -3.4775,-0.84 -5.1601,4.9374 -1.8301,6.1074 7.76,3.575 16.5127,3.9601 24.8602,5.0976 -1.3125,4.8275 -3.4424,9.8651 -2.9649,14.9426 8.21,10.4075 23.4173,13.2474 35.5223,8.8024 4.815,-1.715 10.5276,-3.1176 13.7676,-7.2801 0.098,-4.8675 -1.4301,-9.74 -1.5176,-14.6375 4.4075,-0.9225 8.9275,-1.1447 13.3625,-1.8922 2.8375,-0.53 6.6074,0.4175 8.8324,-1.575 1.735,-3.78 -3.3747,-6.055 -6.3922,-4.8625 -5.955,0.44 -11.9125,1.1247 -17.8925,0.9422 -0.7625,-0.4175 -0.9852,-1.8798 -1.6977,-1.9348 -2.6125,-4.59 -6.4876,-8.5377 -9.2051,-13.0152 3.0775,-2.1 6.3628,-4.9275 7.1528,-8.875 1.1625,-5.9175 -1.9651,-11.9823 -6.7051,-15.3973 z m -83.0851,19.6547 c -1.8413,0.015 -3.6588,0.8427 -4.7375,2.5152 -2.19,4.1375 1.7726,7.985 5.3601,9.32 2.9075,1.7925 6.3252,2.9575 9.6477,3.73 3.3275,1.48 9.7248,-0.4124 7.3098,-5.1324 -2.6375,-1.975 -5.56,-3.7127 -8.4,-5.3652 -1.18,-1.23 -2.8675,-1.8349 -4.3,-2.7024 -1.1738,-1.5812 -3.0389,-2.3799 -4.8801,-2.3652 z m 139.75,8.0926 c -5.1225,2.7425 -10.7224,4.5126 -15.8824,7.1351 -0.7875,4.8625 5.935,5.1426 9.025,3.6051 3.4625,-0.835 7.2202,-2.5302 9.8527,-4.5277 1.6025,-0.4625 2.9573,-1.4747 4.4148,-2.2422 -0.98,-0.715 -2.1225,-1.1751 -3.2875,-1.4801 -1.4475,-0.695 -2.8701,-1.4377 -4.1226,-2.4902 z m -180.3898,2.7551 c 4.455,11.7325 13.9224,20.7575 24.1699,27.5875 0.9375,0.8875 2.805,0.1751 1.85,-1.1774 0.15,-1.5975 0.3674,-3.1924 0.4574,-4.7949 -3.42,-1.6375 -6.5475,-3.7951 -9.675,-5.9176 -0.054,-0.056 -0.1079,-0.1091 -0.1625,-0.1586 -0.122,-0.1105 -0.2458,-0.2031 -0.3703,-0.282 -4e-4,-2e-4 -4e-4,0 -8e-4,0 -5.7332,-4.7393 -11.1719,-9.849 -16.2687,-15.2562 z m 214.755,8.2476 c -1.425,1.5775 -2.7575,3.2451 -4.0375,4.9426 -4.575,4.68 -9.0051,9.5424 -13.9101,13.8949 -0.022,0.765 0.6152,2.6101 1.6152,1.6051 5.195,-4.4525 9.8973,-9.5976 13.4148,-15.4926 1.1725,-1.3325 2.1851,-3.215 2.9176,-4.95 z m -130.2488,10.9992 c -0.2439,0.013 -0.4364,0.1289 -0.4539,0.4407 -6.67,4.1325 -14.1099,6.7525 -21.2824,9.78 -2.755,-0.1225 -1.115,3.55 -1.475,5.2375 7.0275,0.6775 14.4927,-0.4851 20.6777,-3.7476 4.585,-1.34 5.8674,-7.7373 3.4699,-11.4473 -0.2236,-0.1265 -0.6227,-0.28 -0.9363,-0.2633 z m 57.4539,3.5684 c -0.072,3.28 -0.2177,8.3474 3.8273,9.4074 6.605,2.28 13.08,5.8399 20.1625,5.9899 0.17,-2.01 0.1349,-4.065 -0.048,-6.0575 -8.3025,-2.1875 -16.3872,-5.2473 -23.9422,-9.3398 z m -109.5777,2.0137 c -1.291,0 -1.4617,5.4863 0.8351,5.4886 1.2475,0.765 2.63,1.3626 4.075,1.6301 5.62,3.26 12.63,2.9675 18.9625,2.75 0.047,-0.8375 -0.01,-1.6899 -0.018,-2.5199 0.035,-0.37 0.05,-0.7403 0.015,-1.1078 -0.01,-0.4025 -0.032,-1.2099 -0.045,-1.6149 -7.97,-0.79 -15.9398,-1.9575 -23.5523,-4.55 -0.096,-0.052 -0.1866,-0.076 -0.2727,-0.076 z m -41.65003,1.741 c 0.43,5.0175 2.91774,9.7526 6.30274,13.4051 1.01999,1.83 2.74489,3.3725 4.50239,4.475 0.2175,0.5275 0.6351,0.9974 1.2476,1.0074 0.062,0.068 0.1875,0.2002 0.25,0.2652 2.47,2.1825 5.4249,3.9499 8.4524,5.2899 0.4675,0.335 0.9748,0.6524 1.5648,0.6949 0.25,0.715 1.4127,0.6777 2.0277,0.9777 0.8975,0.76 2.1126,0.9276 3.1926,1.3051 1.3425,0.945 3.1572,1.6899 4.8672,1.4699 0.038,-1.955 1.8802,-5.2551 -0.5773,-6.3351 -4.8875,-1.255 -9.4824,-3.3675 -14.1024,-5.3325 -3.9525,-2.5325 -8.0001,-5.0475 -11.44257,-8.305 -2.255,-2.7525 -4.60016,-5.9876 -6.28516,-8.9176 z m 236.44253,0.5902 c -6.1875,8.7075 -14.6473,15.5723 -23.8648,20.8848 0.31,0.7375 -0.022,3.4276 1.3875,2.3801 9.085,-5.735 17.8023,-14.1849 22.4773,-23.2649 z m -34.7601,1.3949 c -7.2325,1.855 -14.4549,3.9276 -21.8949,4.7426 -0.08,1.8 -0.035,3.6099 0.032,5.4149 7.53,0.4325 15.3926,-1.4424 21.5976,-5.8149 1.7825,-0.6325 1.6974,-3.9526 0.2649,-4.3426 z m -112.2227,10.3129 c -0.2414,0 -0.5152,0.045 -0.8246,0.1446 -6.785,2.82 -13.3827,6.5374 -19.8277,9.9699 -3.4725,0.1475 -3.6522,7.21 0.1328,7.15 8.2725,0.315 17.4274,-3.8698 21.3574,-11.3973 0.8043,-1.5406 1.4957,-5.8614 -0.8379,-5.8672 z m 8.9489,0.096 c -0.8741,-0.017 -1.6811,0.2538 -2.0911,1.0563 -2.2925,2.345 -1.7951,6.855 -0.01,9.4625 2.6375,5.305 9.0052,7.2426 14.2227,9.0176 5.7,2.1875 12.5323,2.0275 18.6148,1.4625 2.8225,-0.1325 5.7726,-0.445 8.4176,-1.45 6.4075,-1.3275 14.7952,-5.815 12.1977,-13.825 0,-0.1575 -0.01,-0.475 -0.012,-0.6325 -0.085,-1.7 -0.6226,-3.3701 -1.6676,-4.7226 -1.785,-0.027 -3.7374,0.7901 -5.0574,1.9176 -5.22,2.44 -10.8299,4.2852 -16.6074,4.9027 -9.0075,0.5925 -17.5675,-2.6503 -25.5125,-6.5203 -0.6788,-0.3475 -1.6201,-0.6519 -2.4942,-0.6688 z m 58.564,3.8016 c -3.32,0.455 -1.7199,4.8774 -0.5574,6.8449 4.93,5.9575 13.4075,6.1674 20.0375,9.2524 2.005,0.6775 1.4398,-5.0574 0.3598,-5.5774 -6.6575,-3.4125 -13.4474,-6.6149 -19.8399,-10.5199 z m -118.2339,8.7555 c -0.558,0.04 -0.4579,0.8301 -0.5536,1.3195 -0.02,0.95 -0.018,1.9024 0.01,2.8574 1.5525,2.7525 5.7828,2.805 8.6078,3.225 3.2625,0.87 6.8647,0.2623 10.1797,-0.2152 3.9025,0.1725 7.1075,-2.7974 5.5375,-6.9149 -7.6525,-0.105 -15.3172,-0.055 -22.9722,-0.023 -0.3638,-0.1925 -0.623,-0.2625 -0.809,-0.2492 z m 202.4062,0.099 c -8.1125,8.1375 -16.8875,15.7028 -26.6,21.8953 -1.3175,0.5725 -0.9225,2.8248 -0.65,3.6148 11.7975,-4.6 21.6025,-15.0626 27.25,-25.5101 z m -35.375,0.9777 c -4.8475,0.39 -9.6399,1.6 -14.5199,1.8625 -1.885,0.1075 -3.765,0.2274 -5.645,0.3649 -3.2125,-1.225 -2.6473,3.2925 -2.0023,5.175 2.6525,-0.12 5.4398,0.3352 8.0223,-0.3098 0.695,0 1.4852,0.1997 2.1027,-0.2078 2.97,-0.3925 6.0574,-1.3673 8.5074,-3.0223 1.7975,-0.5425 4.4173,-1.445 3.5348,-3.8625 z m -110.8027,4.2477 c -0.6934,-0.018 -1.4197,0.4176 -1.6321,1.2121 -1.5075,4.3875 -1.6449,9.9526 0.9176,13.9676 1.7875,2.92 4.5425,5.3776 7.5875,6.9101 4.6475,3.5325 10.9325,5.0498 16.75,4.9598 8.5475,0.585 17.5623,-2.3024 24.9473,-6.4449 3.3375,-1.4175 7.2426,-3.9598 7.4476,-7.9973 0.465,-2.445 0.93,-5.6201 -0.4625,-7.7426 -0.1275,-1.4775 -1.8826,-0.9025 -2.8351,-0.575 -8.21,3.205 -16.8925,6.0348 -25.82,5.5723 -9.33,-0.16 -17.66,-4.6172 -25.6,-8.9547 -0.2417,-0.6059 -0.761,-0.8937 -1.3003,-0.9074 z m -10.0301,2.2941 c -2.3143,-0.035 -5.446,2.6866 -7.1297,3.6281 -1.91,0.76 -3.6473,1.9927 -5.3348,3.1727 -2.015,1.0575 -4.0551,2.2172 -5.6926,3.8047 -2.54,1.5625 -5.0176,4.7126 -3.8976,7.8551 0.2325,1.6575 2.2178,3.02 3.7953,2.1375 5.5075,-2.94 11.0375,-5.8451 16.525,-8.8176 3.4675,-2.0075 4.5173,-6.4999 3.9398,-10.2024 -0.5196,-1.1292 -1.2998,-1.5646 -2.2054,-1.5781 z m -83.22463,1.4133 c 2.035,2.74 4.515,5.195 7.12503,7.375 0.2575,0.77 0.9852,1.2822 1.7277,1.5422 1.2225,1.3025 2.8174,2.2876 4.4324,3.0476 0.2175,0.2075 0.475,0.3727 0.745,0.5102 1.7675,1.3775 3.7076,2.6972 5.8351,3.4172 1.3275,1.565 3.8172,2.0151 5.7297,2.5226 0.1025,0 0.3077,0 0.4102,-0.01 2.605,1.4375 2.7949,-4.7749 0.8449,-5.2949 -1.5975,-0.8875 -3.3025,-1.6601 -5.0875,-2.0976 -2.0225,-1.3975 -4.63,-2.5902 -7.05,-3.2227 -1.075,-0.3475 -2.0299,-0.9375 -2.9699,-1.55 -0.4425,-0.8425 -1.6699,-0.8823 -2.4524,-1.2898 -3.0275,-1.7175 -6.11273,-3.4824 -9.29023,-4.9524 z m 156.16363,1.9262 c -1.7398,0.085 -2.2605,2.8925 -1.4484,4.3437 1.7475,4.69 6.7798,6.7498 10.6473,9.3723 3.1125,2.2075 6.89,3.2901 10.6925,2.8726 2.9375,-4.41 -3.6448,-6.2725 -6.5023,-8.3125 -3.8975,-2.905 -8.1327,-5.4825 -12.2977,-8.0175 -0.405,-0.1969 -0.7692,-0.2744 -1.0914,-0.2586 z m -100.1785,12.3211 c -6.795,1.9275 -13.9451,0.8802 -20.8976,1.2527 0.1725,1.6175 -0.4924,3.6847 0.2676,5.1172 6.785,3.0325 15.6125,2.5226 21.7175,-1.8074 -0.485,-1.345 0.42,-4.27 -1.0875,-4.5625 z m 184.8551,0.7777 c -7.9325,6.0725 -16.0827,11.8898 -24.7227,16.9273 -2.095,0.55 -1.7751,2.9201 -1.4101,4.4676 10.4,-4.38 19.9153,-12.8849 26.1328,-21.3949 z m -33.775,0.7574 c -6.2475,0.37 -12.5377,0.4474 -18.7977,0.6699 -2.505,0.2975 -6.2425,-1.8425 -7.9375,0.8075 -1.1775,2.895 2.3175,4.8575 4.77,4.905 0.09,0 0.2701,-0.015 0.3601,-0.018 5.63,0.79 11.6449,-0.047 16.9949,-2.0097 2.2075,-0.3825 5.5677,-1.3276 4.6102,-4.3551 z m -124.5453,0.3848 c -1.2575,0.61 -2.7947,1.2703 -3.6422,2.3203 -5.6125,2.8675 -10.8525,6.6098 -16.0625,10.1898 -2.7475,1.5725 -3.235,5.4626 -2.5375,7.9676 4.0675,-1.0775 7.9023,-3.1002 11.5398,-5.2027 4.315,-2.2675 8.6149,-4.8024 12.2399,-8.0824 0.6925,-2.295 0.855,-5.7851 -1.5375,-7.1926 z m -85.20235,0.35 0,0.4578 c 5.4875,10.75 15.70235,18.9597 27.01485,22.9422 2.735,1.2375 1.3002,-3.4123 1.2777,-4.6598 -10.945,-3.54 -19.98,-11.0402 -28.29255,-18.7402 z m 94.07265,2.4953 c -4.7275,3.6125 -3.1952,13.6247 2.2348,16.3797 0.065,0.058 0.1951,0.1753 0.2601,0.2328 4.93,4.575 11.8149,7.4025 18.5074,8.3125 l 0.22,0.012 c 2.5025,0.7475 6.4052,0.9299 9.2777,0.4324 2.375,-0.015 4.8798,-0.1601 7.1148,-1.0301 9.3125,-1.405 17.7576,-8.2476 19.4926,-17.7476 0.5925,-1.7725 -1.1801,-3.7573 -2.9476,-2.9598 -5.115,2.1275 -10.5148,3.87 -15.7598,5.3125 -2.59,0.1225 -5.0978,1.0475 -7.6828,1.3125 -5.8575,0.345 -11.6124,-0.9401 -17.0899,-2.7926 -4.465,-2.225 -9.1948,-5.0573 -13.6273,-7.4648 z m 65.025,1.7348 c -0.285,0 -0.8602,0.01 -1.1477,0.01 -3.1175,2.1925 -1.7648,7.2925 0.3977,9.8375 4.595,4.93 10.8173,8.1074 17.0648,10.4574 3.13,0.9875 1.0227,-3.7825 1.5727,-5.425 -6.3775,-4.45 -11.71,-10.1751 -17.8875,-14.8801 z m -101.0227,11.7601 c -6.9725,3.005 -14.6898,3.6499 -22.2148,3.4824 -0.6225,-0.1275 -1.2501,-0.2473 -1.8851,-0.2648 0.053,3.2275 -0.6725,7.4274 3.5175,8.2199 5.265,2.4125 11.9224,1.6424 16.9649,-1.0476 3.695,-2.0175 4.175,-7.0699 3.6175,-10.3899 z m 151.095,3.5641 c -0.152,0 -0.3489,0.055 -0.6024,0.1984 -6.4925,2.8525 -13.5475,3.2749 -20.475,2.5149 -1.5375,-0.3325 -5.4026,-1.7251 -4.7851,1.2074 -0.565,4.6575 5.0225,4.7626 8.275,5.1301 6.44,0.75 14.105,-0.6801 17.98,-6.4051 -0.061,-0.7067 0.4278,-2.6182 -0.3925,-2.6457 z m -114.6274,8.0633 c -2.11,3.6475 -1.1627,8.795 0.7598,12.255 5.365,10.9875 19.8901,14.6626 31.1226,12.5051 7.8,-0.795 14.9827,-6.2025 17.6477,-13.625 0.955,-2.2675 1.6147,-5.3002 -0.2328,-7.2777 -3.1075,0.515 -6.5022,1.63 -9.2922,2.4625 l -0.2125,0.048 c -13.075,3.51 -26.8827,0.8674 -38.6227,-5.5351 -0.085,-0.5625 -0.7299,-0.6674 -1.1699,-0.8324 z m 44.4723,29.555 c -2.3175,1.755 -4.9849,2.9974 -7.8024,3.7274 -8.5675,1.635 -17.3951,0.515 -25.7601,-1.6625 0.56,2.465 1.2051,5.04 2.5301,7.2125 1.1825,3.025 2.98,6.1851 5.3425,8.3801 3.2075,3.8975 6.1725,8.5527 10.57,11.2027 5.65,1.4925 12.3751,1.1072 17.3976,-2.0703 0.94,-0.62 2.4374,-1.5048 2.3649,-2.6848 -4.5225,-7.1825 -4.1351,-15.9801 -4.6426,-24.1051 z m 8.5801,30.0926 c -2.3725,0 -4.1174,2.0973 -6.1149,3.1723 -2.7625,0.8875 -5.4976,1.9176 -8.4176,2.2426 3.8175,4.03 8.2751,7.5125 12.1301,11.55 3.01,2.485 5.8473,5.74 9.8098,6.6 4.0375,-0.6575 8.9603,-2.7476 9.9328,-7.1426 -2.76,-5.53 -8.175,-9.2824 -12.9125,-13.0399 -1.0625,-1.5225 -2.9527,-2.3399 -4.4277,-3.3824 z m -55.8551,13.8973 c -1.3775,0.375 -2.7775,0.7677 -4.0375,1.4402 -4.795,1.47 -9.2172,4.2299 -12.7672,7.7574 -5.37,5.54 -6.705,14.3676 -3.4375,21.3176 2.0275,4.4075 4.2323,8.91 7.4273,12.575 2.6775,3.035 6.6199,-1.6099 6.2649,-4.3824 -3.565,-2.2125 -8.4373,-5.5801 -7.3973,-10.3676 1.87,-0.9725 4.1875,-1.0076 6.125,-1.9051 1.1875,-0.5475 4.6924,0.425 3.6899,-1.9625 -1.6425,-1.2975 -3.3998,-2.4876 -5.0973,-3.7226 -1.75,-2.1475 -4.5977,-4.5372 -3.5402,-7.6797 1.26,-4.4075 5.3874,-7.045 8.5699,-10.0125 1.35,-1.035 3.2175,-1.6003 4.2,-3.0578 z m 78.5101,7.7801 c -1.6575,1.0575 -3.4399,2.0452 -4.9824,3.2527 -0.375,0.072 -0.7624,0.1775 -1.0449,0.45 -1.7375,0.445 -3.3452,1.2775 -4.9652,2.025 2.855,4.59 4.5002,9.7625 5.7152,14.975 2.6625,2.78 7.6673,2.7499 11.0398,1.3199 2.3675,-3.035 1.5199,-7.2077 0.7399,-10.6777 -0.1175,-1.0875 -0.2725,-2.2799 -0.975,-3.1574 -1.1375,-3.045 -2.6749,-6.44 -5.5274,-8.1875 z m -6.4058,26.5671 c -0.5708,-0.014 -1.1441,0.6097 -1.3391,1.1403 -2.935,2.3025 -5.5749,5.1826 -8.1699,7.8601 -2.2475,1.045 -3.8825,3.16 -6.0375,4.42 1.8525,2.3925 2.3873,5.3701 2.9648,8.2351 6.165,-1.715 12.0552,-4.9126 16.7227,-9.2601 0.1025,-0.085 0.3098,-0.2549 0.4148,-0.3399 3.0625,-2.0675 5.325,-5.2976 6.8575,-8.6551 -1.085,-0.295 -2.2101,-0.5126 -3.3301,-0.3976 l -0.2149,-0.03 c -2.1475,-1.0425 -5.1725,-1.1678 -7.3125,-2.7203 -0.1756,-0.1731 -0.3655,-0.2482 -0.5558,-0.2528 z m -72.793,7.5934 c -3.1415,-0.015 -5.5039,5.811 -1.7785,7.5621 3.2025,3.1975 7.9073,4.6875 12.1723,6.0375 3,0.99 8.835,3.8748 10.325,-0.3652 0.89,-1.2675 0.9474,-4.5122 -0.7926,-5.6922 -3.7325,-1.515 -7.6448,-2.5153 -11.4723,-3.7328 -1.855,-1.0675 -3.965,-1.7749 -5.9875,-2.4949 -0.814,-0.9273 -1.6656,-1.3106 -2.4664,-1.3145 z m 50.3688,7.4746 c -3.9875,0.1875 -7.9598,1.2224 -11.9848,1.3399 -0.3025,0 -0.6051,0.01 -0.9051,0.018 -3.925,0 -7.8527,0.027 -11.7652,-0.1875 0.22,2.605 -0.5847,5.0925 -0.9672,7.63 3.5475,0.85 7.1199,1.605 10.7449,2.045 l 0.7,0 c 5.685,-0.825 11.5298,-1.3077 17.0973,-2.4852 0.425,-2.87 -0.8124,-6.3598 -2.9199,-8.3598 z"
                 inkscape:connector-curvature="0"
                 style="opacity:0.7" />
            </g>
          </g>
        </svg>
        
        `
    },
    "Sagittarius": {
        "Aries": [92, `<h3>When Aries and Sagittarius come together in a love affair, it can be a match made in heaven! These partners have much in common — similar energies and interests — and are highly compatible.</h3>
        <p>Both are explorers and pioneers. This relationship is torrid and exciting and both partners are always ready for a new adventure. They both crave life experience of their own and don’t like to waste time just reading about it or listening to others tell about theirs. They do need to be careful, however: This could be an accident-prone relationship as Aries is always in a rush and Sagittarius tends to look at everything but the obvious. Also, as much as these two have in common, it may be difficult to maintain a long-term relationship when both parties have so much energy to start new things — but not much interest in following through.</p>`],
        "Taurus": [32, `<h3>When Taurus and Sagittarius come together in a love affair, their connection can be incredibly passionate and steamy, but they must give themselves time to learn about the particular energy this relationship generates.</h3>
        <p>They both have much to gain from their union! While Sagittarius thrives when they’re constantly experiencing new people, places, foods and more, Taurus can be quite content with routine as it affords them the security they so prize. Early in the relationship, Taurus might tend to demand more commitment and stability than Sagittarius is ready to give, but if Taurus can learn to be patient, Sagittarius can definitely come to appreciate the comforts of hearth and home.</p>`],
        "Gemini": [61, `<h3>When Gemini and Sagittarius come together in a love affair, it can be a truly spectacular match! These two are extremely compatible; any rough spots they encounter during the course of the relationship are sure to be smoothed over with a minimum of effort.</h3>
        <p>Gemini is quite able to provide pioneering, adventurous Sagittarius with the independence Sagittarius requires in a close relationship, because Gemini shares that same need. While Sagittarius needs physical independence, Gemini needs mental freedom, but the need is the same at base. These two both love new experiences, people and sensations, and are sure to have great adventures together. Both have attention spans that love to move quickly from one thing to the next in order to absorb as much experience as possible.</p>`],
        "Cancer": [53, `<h3>When Cancer and Sagittarius make a love match, they both need to be patient and give the relationship time to grow and mature.</h3>
        <p>As it develops, each love partner will discover that they have much to offer one another. At first, it just seems like Sagittarius is the thrill seeker who enjoys the occasional adrenaline rush, and that Cancer derives much more satisfaction from emotional security. Early in the relationship, Cancer may want more of a commitment than Sagittarius is willing to give. But as time goes by, Sagittarius will learn to appreciate the strong emotional support that Cancer offers.</p>`],
        "Leo": [94, `<h3>When Leo and Sagittarius join together in a love match, the result is often fireworks! Both Signs are extremely dynamic and enjoy life to the fullest.</h3>
        <p>This couple is full of life and fun to be around, with each person encouraging the other to aim high! Sagittarius’s philosophical tendency warrants a distraction to Leo’s obsession with the larger-than-life. The two will have genuine admiration and respect for one another. Both are warm, charismatic and charming; people enjoy being in the energy this couple radiates.</p>`],
        "Virgo": [49, `<h3>When Virgo and Sagittarius join together in a love match, the result is a well-rounded couple.</h3>
        <p>Sagittarius is an explorer who loves to socialize, while Virgo prefers to analyze Sag’s discoveries. Both enjoy talking about it with one another. Virgo may demand perfection too soon for Sagittarius’s taste, but over time Sagittarius will appreciate a steady and reliable lover whose head isn’t always in the clouds.</p>`],
        "Libra": [74, `<h3>The merging of Libra and Sagittarius can be paradise found for both Signs; this combination is a harmonious one, to say the least.</h3>
        <p>Signs that are two positions apart in the Zodiac tend to have a very deep, special connection and understanding of one another. Sagittarius, the journeyer, is constantly in search of wisdom. Libra has a mind keen for art, beauty and aesthetics; Libra makes a stimulating companion for Sagittarius on their travels and adds much to Sagittarius’s experience. The relationship always feels new because these two keep it exciting — and yet their natural understanding of one another makes them feel like intimates from the beginning. Together they will reach new horizons in love and in life.</p>`],
        "Scorpio": [29, `<h3>If a Scorpio and a Sagittarius want to make a love match, they should be warned to slow down, take their time getting to know one another on a deep, significant level or else they run the risk of getting way ahead of themselves.</h3>
        <p>This relationship could be over before either partner even realizes it’s started if they’re not careful! Their patience will be very richly rewarded. Sagittarius thrives on change, on the new and the exciting and on the power of positive thought. Scorpio just wants to get closer and strengthen emotional ties. Early in the relationship, Sagittarius could feel hemmed in by Scorpio’s rapt attention and high expectations for love. If Scorpio can control their emotions, these two are in for satisfaction and excitement.</p>`],
        "Sagittarius": [45, `<h3>When two Sagittarians join together in a love match, the truth-loving natures makes theirs a near perfect relationship.</h3>
        <p>This couple views the world around them with an educated eye and both share an intense hunger for more knowledge. They will engage one another in pleasant conversation and banter that challenges and tickles the mind. An occasional hotheaded dispute can erupt in the Sagittarius-Sagittarius relationship, when one fact-fanatic Sag partner carries things a little too far.</p>`],
        "Capricorn": [61, `<h3>When Sagittarius and Capricorn join together in a love match, things may start slow and they may feel that they don’t have much to gain from the other.</h3>
        <p>In some ways, Sagittarius and Capricorn are opposites: Sagittarius is easy going, whimsical, seeks knowledge for its own sake, always jumps headfirst into new things, and is typically impatient. Capricorn is detail-oriented and passive, even shy, and is always looking toward the next project. Their differences can actually forge a stronger relationship in the long run, there being vast amounts each partner can learn from the other.</p>`],
        "Aquarius": [92, `<h3>When Sagittarius and Aquarius join together in a love match, Aquarian ideals and Sagittarian knowledge combine to make them a creative and unique couple.</h3>
        <p>This partnership is uninhibited, and while it can get competitive with these two, there’s never a dull moment! Underneath any romantic overtone, there exists a great friendship; their Signs are two apart and this tends to give them an ability to communicate well as well as an excellent rapport. Both are idealistic and excited about life, and together they enjoy great times. Together, the two can fly without fear of falling.</p>`],
        "Pisces": [63, `<h3>When Sagittarius and Pisces join together in a love match, a relationship of realized dreams is formed.</h3>
        <p>Sagittarius is more of a thinker and philosophizer, easily drifting around from one pursuit to the next. Pisces is more inward, involved in the shifting of their own mindscape. They are opposites in some respects, and to outsiders may seem an unlikely pair. But as their love for one another grows, they are more likely to be able to satisfy the philosophical cravings of the other and maintain a healthy relationship.</p>`],
        "svg": `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
        <!-- Created with Inkscape (http://www.inkscape.org/) -->
        
        <svg
           xmlns:dc="http://purl.org/dc/elements/1.1/"
           xmlns:cc="http://creativecommons.org/ns#"
           xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
           xmlns:svg="http://www.w3.org/2000/svg"
           xmlns="http://www.w3.org/2000/svg"
           xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
           xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
           width="50.86133mm"
           height="50.86133mm"
           viewBox="0 0 718.79998 718.79998"
           id="svg2"
           version="1.1"
           inkscape:version="0.91 r13725"
           sodipodi:docname="SagittariusDrawing5.svg">
          <defs
             id="defs4">
            <filter
               inkscape:label="Modified combined Lighting"
               inkscape:menu="Bevels"
               inkscape:menu-tooltip="Basic specular bevel to use for building textures"
               style="color-interpolation-filters:sRGB"
               id="filter125483"
               height="1.04"
               width="1.04"
               y="-0.02"
               x="-0.02">
              <feGaussianBlur
                 stdDeviation="6"
                 in="SourceGraphic"
                 result="result0"
                 id="feGaussianBlur125485" />
              <feDiffuseLighting
                 lighting-color="#ffffff"
                 diffuseConstant="1"
                 surfaceScale="4"
                 result="result5"
                 id="feDiffuseLighting125487">
                <feDistantLight
                   elevation="45"
                   azimuth="235"
                   id="feDistantLight125489" />
              </feDiffuseLighting>
              <feComposite
                 k1="1.4"
                 in2="SourceGraphic"
                 in="result5"
                 result="fbSourceGraphic"
                 operator="arithmetic"
                 id="feComposite125491"
                 k2="0"
                 k3="0"
                 k4="0" />
              <feGaussianBlur
                 result="result0"
                 in="fbSourceGraphic"
                 stdDeviation="6"
                 id="feGaussianBlur125493" />
              <feSpecularLighting
                 specularExponent="25"
                 specularConstant="1"
                 surfaceScale="4"
                 lighting-color="#ffffff"
                 result="result1"
                 in="result0"
                 id="feSpecularLighting125495">
                <feDistantLight
                   azimuth="235"
                   elevation="45"
                   id="feDistantLight125497" />
              </feSpecularLighting>
              <feComposite
                 k3="1"
                 k2="1"
                 operator="arithmetic"
                 in="fbSourceGraphic"
                 in2="result1"
                 result="result4"
                 id="feComposite125499"
                 k1="0"
                 k4="0" />
              <feComposite
                 operator="in"
                 result="fbSourceGraphic"
                 in2="SourceGraphic"
                 in="result4"
                 id="feComposite125501" />
              <feColorMatrix
                 result="fbSourceGraphicAlpha"
                 in="fbSourceGraphic"
                 values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
                 id="feColorMatrix125639" />
              <feGaussianBlur
                 id="feGaussianBlur125641"
                 stdDeviation="1.1000000000000001 1.1299999999999999"
                 result="blur"
                 in="fbSourceGraphic" />
              <feColorMatrix
                 id="feColorMatrix125643"
                 values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 50 0 "
                 result="colormatrix" />
              <feComposite
                 id="feComposite125645"
                 in2="fbSourceGraphic"
                 in="colormatrix"
                 operator="in" />
            </filter>
            <filter
               inkscape:collect="always"
               style="color-interpolation-filters:sRGB"
               id="filter126649"
               x="-0.099000007"
               width="1.198"
               y="-0.099000007"
               height="1.198">
              <feGaussianBlur
                 inkscape:collect="always"
                 stdDeviation="2.4750002"
                 id="feGaussianBlur126651" />
            </filter>
          </defs>
          <sodipodi:namedview
             id="base"
             pagecolor="#ffffff"
             bordercolor="#666666"
             borderopacity="1.0"
             inkscape:pageopacity="0.0"
             inkscape:pageshadow="2"
             inkscape:zoom="0.73594882"
             inkscape:cx="359.39999"
             inkscape:cy="359.39999"
             inkscape:document-units="px"
             inkscape:current-layer="layer1"
             showgrid="false"
             inkscape:window-width="1366"
             inkscape:window-height="705"
             inkscape:window-x="-8"
             inkscape:window-y="-8"
             inkscape:window-maximized="1"
             fit-margin-top="0"
             fit-margin-left="0"
             fit-margin-right="0"
             fit-margin-bottom="0" />
          <metadata
             id="metadata7">
            <rdf:RDF>
              <cc:Work
                 rdf:about="">
                <dc:format>image/svg+xml</dc:format>
                <dc:type
                   rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
                <dc:title></dc:title>
              </cc:Work>
            </rdf:RDF>
          </metadata>
          <g
             inkscape:label="Layer 1"
             inkscape:groupmode="layer"
             id="layer1"
             transform="translate(-20.788944,230.99174)">
            <g
               id="g91385">
              <circle
                 transform="matrix(10,0,0,10,-3421.7007,-4530.6759)"
                 id="circle124404-4"
                 r="30"
                 cy="465.90842"
                 cx="380.18896"
                 style="fill:#000000;fill-opacity:1;stroke:none;stroke-opacity:1;filter:url(#filter126649)" />
              <circle
                 transform="matrix(10,0,0,10,-3421.7007,-4530.6759)"
                 id="circle124404"
                 r="30"
                 cy="463.90842"
                 cx="378.189"
                 style="fill:#063daa;fill-opacity:1;stroke:none;stroke-opacity:1;filter:url(#filter125483)" />
              <path
                 style="opacity:0.7"
                 id="path4"
                 d="m 475.62946,-70.382112 c -0.3425,2.6875 -0.60992,5.3925 -1.06992,8.0625 -2.8875,4.0175 -6.30016,7.63992 -9.22266,11.63242 -14.15,17.315 -29.13734,33.90015 -43.45234,51.06014999 -1.865,1.37000001 -3.50742,3.01008001 -5.26992,4.50508001 -1.1175,0.5825 -2.42016,0.82242 -3.52266,0.0574 -5.1275,-3.075 -11.3325,-5.44015001 -17.3375,-3.69765 -7.685,1.4625 -17.8075,2.79023 -22.5,-5.04727 5.785,-7.5175 6.74734,-17.54508 4.62734,-26.56758 -0.2525,-2.8175 -1.50718,-6.27492 1.04532,-8.46992 5.7175,-4.8775 13.62218,-5.38273 20.70468,-6.76523 3.3,-1.2075 3.71,-6.23508 1.05,-8.34258 -5.1775,-4.4425 -12.45726,-4.8275 -18.94726,-4.6125 -7.9425,0.46 -16.42992,2.25031 -22.38242,7.89531 -8.5025,8.2975 -6.24757,21.30492 -6.48007,31.95742 -0.43,3.6525 -4.11766,5.36 -7.31016,6 -1.21,2.79 0.14242,6.18235 2.58242,7.83985 5.1325,3.6475 11.70031,5.65522999 17.95781,4.16522999 3.665,-1.35499999 4.68492,3.79719001 5.23242,6.25469001 -4.47499,0.4975 -9.30523,-0.17742 -13.40273,2.11758 -5.4,2.415 -8.57226,7.63492 -12.90977,11.36992 -7.735,1.4075 -15.88007,4.89266 -20.08007,11.89766 -1.285,5.0275 -7.55493,5.47257 -10.20743,9.53007 -5.85,5.8825 -7.33023,18.21758 1.40977,22.15508 11.7475,4.39 25.01258,2.1475 36.56758,-1.925 10.5875,-4.4375 20.84265,-10.26258 32.37265,-11.91758 6.675,-0.615 13.29758,1.4325 19.98008,0.8375 0.77,-0.0525 2.04492,1.18485 0.76992,1.45235 -6.935,2.26 -14.32758,0.13242 -21.39258,0.51992 -5.0525,0.675 -3.5825,8.10023 0.2,9.55273 8.58,3.72 17.71,-0.34742 26.175,-2.35742 1.23,-0.5975 3.115,0.70242 3.025,2.01992 -6.7725,2.3 -13.80758,3.94493 -20.95508,4.45743 -2.395,1.2475 -0.85234,4.62257 0.99766,5.64257 8.2975,5.995 19.23,5.40985 28.7,3.00235 1.445,-0.81 2.3,0.80515 2.5625,1.93515 -6.6775,2.975 -14.1775,5.450082 -21.5125,3.54258 -12.1975,-2.76 -20.46992,-13.41781 -26.34492,-23.75781 -5.025,1.1 -9.85781,2.92766 -14.68281,4.68516 -2.9325,0.91 -2.25,5.30492 -0.375,6.98242 4.7325,3.8525 10.47015,6.1475 15.82265,8.8625 2.935,3.975 0.13992,11.16742 -5.21758,11.16992 -8.08999,0.9 -16.44976,1.125156 -24.43476,-0.702344 -14.205,-2.285 -26.4025,-10.335076 -39.9625,-14.542576 -7.6325,-2.6375 -15.80531,-4.15742 -23.88281,-3.55742 -7.825,0.3725 -15.46219,3.25234 -22.10469,7.05234 0.8875,-11.0675 1.78969,-25.20734 -6.64531,-34.36484 -8.335,-7.565 -22.35234,-6.87 -30.72734,0.35 -5.7225,4.8775 -8.61508,12.175 -10.46758,19.275 -4.8125,12.45 -9.69992,25.067496 -17.49492,36.012497 -3.7225,4.854995 -8.66735,10.340155 -15.41485,9.772655 -3.4775,0.2375 -5.77515,-2.63008 -8.31015,-4.49258 -1.6525,0.41 -1.275,2.5375 -1.75,3.7875 l 0,0.45 c 2.48,8.53 8.93008,15.30485 14.55508,21.95235 3.64249,4.05999 10.19234,9.59991 15.37734,4.73241 13.8225,-12.18499 19.61765,-31.06218 33.72265,-43.01718 2.6125,-2.3 7.08508,-4.060234 9.81758,-0.915234 2.6975,1.4825 1.61985,4.629923 1.16485,7.007423 0.065,1.7475 1.49007,3.177656 1.56757,4.922651 -2.0325,4.165 -4.93757,7.91766 -6.43007,12.34766 -2.8575,7.1075 -2.7875,14.89219 -4.475,22.27968 -1.845,9.0025 -5.46743,17.49258 -8.38243,26.16758 -0.71,2.89 0.9625,6.19266 3.9125,6.97266 5.835,1.565 11.3425,-1.725 15.9,-4.9625 8.9575,-6.725 16.22727,-15.33758 23.35977,-23.89258 6.0775,-7.7725 12.3375,-15.655 16.15,-24.8375 3.97,-8.5075 -0.47469,-19.732651 -8.96719,-23.510152 -4.2825,-2.39 -9.65515,-2.374688 -14.28515,-1.042188 -1.6175,0.2975 -3.0525,1.277422 -4.6875,1.444922 -1.0125,-2.665 2.65234,-3.895 4.65234,-4.6875 7.8675,-2.0825 17.855,-2.522578 23.7375,4.107422 3.555,4.277501 7.64023,8.162657 10.61523,12.885156 4.2575,8.78 6.36258,18.39227 8.36758,27.88476 2.855,12.5175 7.55219,24.9525 15.76719,34.975 7.3125,9.31501 17.85258,15.80017 29.15508,19.09767 5.3975,1.3525 10.92516,2.15976 16.36015,3.34726 3.175,2.9725 4.30242,7.5475 7.59492,10.45 5.84,5.3425 13.80242,6.86524 21.40742,7.59024 7.5125,1.18 15.3775,3.82 20.5375,9.7 -12.785,6.5975 -25.4875,13.385 -38.275,19.95 -5.9925,-3.31 -11.49226,-10.76742 -19.23476,-8.74492 -4.4425,2.61 -8.79757,5.49742 -12.80508,8.75742 -0.5825,0.3025 -1.15023,1.49476 -0.20273,1.74726 4.595,2.3475 9.93766,2.45282 14.81016,4.00782 6.18249,1.3125 11.30491,5.23218 16.96991,7.79218 9.0875,-4.1275 17.88742,-8.90484 26.74492,-13.50234 7.725,-3.895 15.36758,-7.95516 23.03008,-11.97266 3.7075,-2.0975 9.48758,-4.98242 8.13008,-10.15742 -1.9075,-5.915 -8.26516,-7.93234 -13.28516,-10.50234 -5.5,-3.015 -11.67218,-7.71008 -11.84218,-14.59258 -0.76,-2.5875 3.2825,-3.48016 4.2625,-1.31016 5.315,6.8325 13.54,10.89774 22.025,11.99024 9.805,0.0225 20.85242,-0.70266 29.38242,5.10234 3.175,2.28 -0.655,5.30992 -2.2625,7.13242 -7.5325,7.085 -14.74,14.59258 -23.4125,20.30508 -2.0725,0.925 -1.41758,3.1725 -2.15508,4.8375 -5.285,4.5925 -12.39508,-4.32726 -16.94258,1.36524 -4.6475,5.285 -9.41508,10.52984 -13.51758,16.25234 -1.28,1.355 0.89032,3.41016 2.32032,2.56016 6.5875,-2.955 13.11,-6.07516 19.85,-8.67266 4.965,-1.71 11.6525,1.31242 15.375,-3.39258 11.4825,-12.5275 23.74742,-24.2975 36.84492,-35.1375 3.195,-3.56 6.29992,-10.65234 1.54492,-14.17734 -7.3775,-4.71 -16.56016,-4.82242 -24.34766,-8.63242 -8.235,-3.285 -17.27734,-9.23766 -19.25234,-18.39767 6.145,-8.5925 14.52242,-15.72984 19.81992,-25.02734 2.505,-4.2275 2.91992,-9.28032 5.09492,-13.64532 12.9475,17.25 26.15032,34.33016 39.09532,51.58517 0.945,-0.8525 2.06492,-1.63766 2.70742,-2.76016 -3.73,-7.06251 -5.50274,-15.17735 -4.90274,-23.15235 1.905,-17.1975 11.09516,-32.26484 15.92266,-48.61484 3.0925,-14.077499 4.68758,-30.440002 -3.34492,-43.200002 -3.8825,-0.72 -7.855,-1.71 -11.85,-1.225 -0.975,6.6575 2.81476,12.435 4.98476,18.412502 4.505,14.855001 -2.05226,29.83219 -8.04726,43.25469 -5.3775,10.91249 -7.07492,23.62273 -4.71992,35.55273 0.007,0.7825 0.80742,3.08758 -0.45508,2.16758 -9.87,-12.1425 -19.46274,-24.53516 -28.62774,-37.21016 -0.5325,-9.4 -0.15218,-19.90257 -5.99218,-27.905073 -0.55,-0.8075 -2.29008,-2.5 -2.91758,-0.825 -1.7525,3.637503 -2.84774,7.565003 -4.56524,11.225003 -0.91,-0.1925 -1.01468,-1.65243 -1.14218,-2.43243 1.69,-5.27 4.785,-10.402339 3.8625,-16.16484 -0.8325,-4.7725 -2.3025,-9.557812 -4.875,-13.682812 -3.6625,0.1175 -7.3225,-0.0149 -10.9625,-0.41992 -0.7225,0.5825 -1.00266,1.58758 -0.58516,2.46758 1.2,5.557496 2.35984,11.170074 4.38984,16.492575 -0.13,0.52 -0.39734,1.554766 -0.92734,0.534766 -4.69,-5.602501 -9.09742,-12.659767 -7.76992,-20.322271 -3.0975,0.0825 -7.485,0.93258 -8.925,-2.70742 6.445,-1.4975 7.545,-10.84 3.4375,-15.1875 -4.3875,-2.4225 -8.8925,1.03485 -13.125,2.15235 -0.5525,-0.5725 -1.515,-1.04008 -1.5375,-1.93008 3.6025,-1.455 7.75492,-1.78508 11.01992,-3.96758 5.3675,-4.1125 3.53258,-12.22727 1.44258,-17.67227 -2.4125,-7.6275 -7.62758,-13.96 -12.78008,-19.9125 3.41,-1.2075 8.305,-2.13757 8.65,-6.59257 2.365,0.11 5.02758,2.21015 6.54258,3.64765 -2.9675,-0.2375 -8.03016,0.93985 -7.66016,5.02735 0.015,5.145 3.92758,9.23984 6.54258,13.38984 4.075,5.7625 6.87742,12.26773 8.71992,19.05273 1.355,0.625 3.27266,-0.70507 4.81016,-0.64257 1.8,-0.345 3.6125,-0.39993 5.3,0.33007 0.0725,-8.3425 -2.75016,-16.43515 -6.32266,-23.87265 0.5275,-0.565 1.13516,-1.045 1.68516,-1.6 3.12,-3.69 -1.665,-7.3225 -2.2,-11.025 -0.57,-4.71 -5.02,-7.37258 -9.025,-8.95508 -2.225,-1.4775 -4.79742,-2.32727 -7.04492,-3.73477001 11.2,-13.20249999 22.55968,-26.30272999 33.85468,-39.42772999 4.86,-5.46 9.45516,-11.34227 14.46016,-16.54727 1.2375,5.7225 1.69992,12.435 3.93242,18.225 1.13,3.4975 2.22016,7.03758 3.98516,10.28008 0.0575,0.1275 0.16984,0.37992 0.22734,0.50742 1.6475,3.8675 3.55758,7.645 5.80508,11.2 l 0.0648,0.18008 c 1.1175,2.7925 2.43524,5.63485 4.20274,8.05235 3.08,5.0175 6.12726,10.05234 8.73476,15.33984 0.065,0.1225 0.19516,0.365 0.26016,0.4875 3.2025,7.2725 4.44758,15.1175 4.80508,23.0125 -0.6625,1.56 0.47508,3.62766 2.31758,3.07266 5.7775,-2.3075 8.26492,-8.95985 7.86992,-14.80235 0.0775,-6.3725 -1.67024,-12.77531 -4.72774,-18.34531 -1.47,-3.4625 -3.77492,-6.50227 -5.96992,-9.53477 -3.28,-4.4975 -6.3325,-9.16273 -9.5625,-13.69023 -8.375,-13.59 -14.67008,-28.46992 -18.15508,-44.06992 -0.425,-1.765 -0.74468,-3.58992 -1.62968,-5.19492 l -0.46016,0 z m -81.13242,27.61015 c -5.355,0.9175 -11.83024,3.1775 -13.75274,8.7875 0.36,5.33 1.26,10.68985 1.9625,16.00235 2.6825,1.7925 5.68282,3.205 8.38282,5.025 5.33,0.2525 10.71742,-0.0476 15.96992,-0.98008 1.0675,-2.4325 1.32758,-5.14 2.03008,-7.6875 1.68,-1.415 3.45718,-2.76508 4.81718,-4.50508 -1.6475,-3.145 -5.39968,-4.10719 -7.35468,-6.91719 -1.815,-2.525 -0.93516,-6.67265 -4.16016,-8.11015 -2.505,-0.95 -5.21242,-1.56235 -7.89492,-1.61485 z m 1.35976,7.77774 c 1.91838,0.0131 3.80188,0.53961 4.79532,2.35976 -2.5375,3.0525 -7.51258,3.62492 -10.71758,1.39492 -1.3525,-2.1925 1.63234,-3.30773 3.36484,-3.52773 0.80626,-0.13281 1.68544,-0.23289 2.55742,-0.22695 z m 18.11016,20.49726 c -8.67,3.325 -18.33516,5.48977 -27.56016,3.13477 -4.245,-3.29 -8.755,4.40492 -7.2625,7.89492 3.9825,3.04749999 9.39032,2.73507999 14.13282,2.98007999 7.825,-0.4725 15.8025,-1.09976999 23.2375,-3.77226999 1.7825,-0.8825 4.10234,-1.76758 4.57734,-3.90508 -0.405,-3.4875 -3.8425,-5.95492 -7.125,-6.33242 z m -33.58124,22.29688 c 0.1638,-0.006 0.361,0.013 0.59608,0.0605 2.8725,1.7225 5.11774,4.29727 7.62774,6.44727 5.705,-0.29 11.19234,-2.71719 16.96484,-3.00469 1.46,-0.395 4.22258,0.44992 3.50508,2.45742 -9.0375,1.92 -18.74758,2.71993 -26.18008,8.85743 -1.99,1.6175 -5.25976,4.45265 -3.17226,7.17265 7.6075,-4.205 15.90218,-9.35523 25.02968,-9.17773 -0.4975,1.6375 -2.74726,2.97492 -4.64726,3.23242 -11.875,2.315 -21.4225,11.6475 -33.79999,11.9875 -8.6425,0.685 -17.01266,-3.1475 -25.64766,-1.9875 -0.6775,-1.7975 -0.48977,-4.65734 2.17773,-3.95234 6.06,1.6425 12.16469,3.25 18.45469,3.75 1.5525,-2.7025 2.91031,-5.91 2.42031,-9.075 -0.425,-3.3625 -4.35757,-3.83485 -7.06757,-3.87735 0.89,-2.675 4.36757,-3.58258 6.73007,-2.35508 3.4225,1.66 5.78992,4.755 8.19492,7.5875 0.9775,1.0075 1.72258,2.88743 2.75508,3.56993 2.4925,-4.22 7.11234,-6.38985 10.07734,-10.15235 2.2425,-3.355 -1.84,-5.98008 -3.525,-8.45508 -0.54374,-0.67742 -2.07734,-3.02845 -0.49374,-3.08554 z m 28.3664,13.12031 c 6.9225,2.99 7.46976,12.37508 9.20976,18.91758 1.9525,5.3525 -2.6875,10.61 -7.925,10.125 -1.3325,-1.335 1.09016,-1.29492 1.71016,-2.01992 1.9,-5.8375 0.1525,-11.97016 0.35,-17.99766 -0.6525,-2.4975 -2.23516,-5.19727 -4.88516,-5.88477 0.1425,-1.1425 1.05274,-2.11023 1.54024,-3.14023 z m 39.46718,7.06758 c -0.9175,0.0375 -1.64226,0.72992 -1.70976,1.64492 2.575,5.6375 4.35726,11.695 5.48476,17.8125 1.365,2.9225 5.35024,1.36 7.10274,-0.3625 -2.0675,-6.4375 -4.2625,-13.03984 -8.5375,-18.40234 -0.69,-0.4475 -1.55024,-0.60508 -2.34024,-0.69258 z m 55.64884,8.03594 c -0.26028,-0.002 -0.52142,0.006 -0.7836,0.0266 -2.3125,0.67 -4.4975,2.36992 -5.4375,4.59492 -0.0525,0.1225 -0.15492,0.37008 -0.20742,0.49258 -4.12,4.9725 -6.04774,17.22742 2.30976,18.96992 4.2625,-0.9875 8.0175,1.50008 12.025,2.41758 3.495,0.66 7.41742,-1.64485 8.10742,-5.22735 0.1625,-4.6125 -0.005,-9.3675 1.45,-13.8125 0.915,-3.5325 -2.45242,-6.53515 -5.88242,-5.83515 -3.97266,0.82265 -7.67712,-1.59325 -11.58124,-1.62656 z m -30.9715,12.30312 c -4.14738,-0.0285 -8.6953,0.70859 -12.60468,1.94609 -1.64,0.865 -4.87758,1.25243 -4.15508,3.85743 -0.41,2.3275 -0.43476,4.73734 -0.44726,7.10234 -0.7225,2.92 -1.1075,6.02 -1.5375,9.0125 0.805,3.255 4.87984,3.86031 7.60234,3.00781 4.285,-1.2075 8.93258,-2.45281 12.86758,-4.14531 4.4125,-1.16 9.01984,-2.53469 12.78984,-5.24219 2.3475,-1.52 7.8125,-2.73258 5.1375,-6.39258 -1.9875,-3.14 -0.86242,-10.35515 -6.70742,-8.26015 -2.92,-0.675 -5.99242,-0.50508 -8.96992,-0.59258 -1.255,-0.18938 -2.59294,-0.28387 -3.9754,-0.29336 z m -29.58046,5.00859 c -1.6716,0.0142 -3.39062,0.41133 -4.50156,1.49727 -1.2525,3.8225 -0.60266,8.03516 -0.21016,11.97266 -1.0675,7.31 10.84758,9.6375 12.49258,2.6375 1.5725,-4.125 1.185,-8.80008 0.3,-13.04258 -0.69,-2.0725 -3.03258,-2.91 -5.05508,-2.7375 l -0.21016,-0.005 c -0.82688,-0.20156 -1.81266,-0.33076 -2.81562,-0.32227 z M 400.44196,85.69054 c 12.5125,3.95 25.14742,10.707423 32.41992,21.95742 2.4975,5.0975 4.69274,10.3325 6.50274,15.7125 0.4025,2.1475 4.17742,2.47235 4.71992,0.32735 0.135,-7.96 0.34726,-15.9625 -0.94024,-23.850003 0.675,0.317503 1.155,0.929923 1.5125,1.569923 0.925,4.5825 1.21024,9.37273 2.31524,13.89023 2.235,0.555 2.675,-3.4825 4.3875,-4.7125 2.435,1.2475 0.23992,3.21508 -0.0801,4.93008 -2.635,10.4475 -5.24492,20.96242 -6.55742,31.68242 -3.1175,14.975 -13.68766,27.77226 -26.99766,34.98477 -2.5625,1.845 -7.22992,1.23758 -6.26992,-2.69492 2.0325,-2.88 5.84,-3.67509 8.6375,-5.66759 7.6525,-5.45 13.51758,-13.77242 15.16758,-23.09492 0.275,-12.9825 1.16,-26.79976 -4.6125,-38.85976 -6.0475,-11.4725 -17.69,-18.437811 -29.1375,-23.607812 -1.03,-0.3425 -2.63758,-1.854688 -1.06758,-2.567188 z m -106.86249,19.43242 c -0.2075,2.0925 -0.0552,4.76 -0.41016,7.05 -0.605,2.4975 -1.38719,4.97492 -2.16719,7.40742 -3.0775,7.9325 -7.29515,15.51492 -13.14765,21.73242 -0.49,0.3375 -0.99766,0.75766 -1.17266,1.34766 -4.3925,4.38 -8.98227,9.12492 -13.00977,13.68242 3.3775,1.51 7.02977,-1.71492 10.54727,-2.14492 3.58,-0.4225 8.96766,-2.56742 11.18516,1.21758 -3.155,1.3925 -7.18993,1.54242 -10.66993,2.49492 -1.5425,2.725 -3.62492,5.2175 -4.91992,8.0375 l -0.15,0.0875 c -2.06,2.66 -3.97758,5.5175 -5.73008,8.375 -2.595,2.79251 -4.69273,6.27751 -7.39023,9.10001 -2.6175,2.385 -1.56,6.12984 -0.85,9.08984 1.2275,12.8575 -3.27234,25.0725 -5.58984,37.5 -1.49,3.43 -2.44758,8.75766 1.79492,10.77266 3.22,0.3725 2.7175,4.09734 4,6.20234 0.865,3.3 1.07015,6.75774 1.72265,10.05274 3.8325,3.3825 9.61743,2.75984 14.34493,2.61484 2.63,0.1275 5.62242,-3.22992 2.15742,-4.83242 -2.0825,-4.06 -4.66235,-7.99516 -6.73985,-12.04766 -1.43,-4.4925 -3.36257,-8.875 -3.81757,-13.625 -0.6475,-10.055 0.45507,-20.33258 3.89257,-29.84258 2.9225,-8.515 8.09008,-16.02242 12.93008,-23.51992 5.225,-6.04001 13.44235,-8.41235 18.26485,-14.96485 1.99,1.2075 3.5975,2.97492 5.7375,3.95742 2.455,2.0625 5.03265,3.95 7.28515,6.25 4.68,4.86251 10.79735,10.75243 18.22735,8.51993 -3.46,-1.9275 -6.89243,-4.20477 -9.81993,-6.98477 -2.655,-3.3725 -5.17742,-6.90274 -7.48242,-10.50274 -5.6725,-11.57 -9.31515,-24.08242 -11.52265,-36.73242 -0.955,-7.1775 -3.3775,-14.29492 -7.5,-20.29492 z m -69.57579,60.73868 c -0.2526,-0.0211 -0.61953,0.12656 -1.15156,0.50624 -1.605,0.77 -3.28281,1.42266 -4.74531,2.46016 -2.385,1.44 -5.675,3.16968 -5.7125,6.35468 -0.1525,7.08751 0.39031,14.21009 -0.50469,21.26759 -1.445,8.3625 -3.61015,16.57508 -5.97265,24.71758 -0.115,0.3575 -0.2275,0.72 -0.3375,1.0875 -1.215,3.86 -2.49993,7.71766 -3.38243,11.67266 -0.5325,4.765 7.75,2.68218 6.2375,7.97968 -0.1675,4.35 -1.7875,9.0925 0.175,13.25 0.8,2.055 1.57485,4.45266 3.72735,5.46016 l 13.43515,0 1.73985,0 c 0.3275,-0.3375 0.64508,-0.67984 0.95508,-1.02734 0.4725,-0.605 1.53015,-1.42024 0.91015,-2.20274 -2.8475,-4.1325 -5.61273,-8.32976 -7.97773,-12.75976 -1.31,-3.6225 -2.31977,-7.335 -3.03477,-11.125 -0.3625,-3.43 -0.30758,-6.89782 -0.69258,-10.32032 -0.32,-13.445 3.67243,-26.52226 9.99493,-38.27226 2.7775,-4.175 5.94742,-8.06992 8.96992,-12.05743 -0.5675,-1.395 -2.39492,-0.37016 -3.46992,-0.24766 -2.7925,0.62 -6.76516,1.0675 -8.19766,-2.075 -0.92422,-1.31422 0.129,-4.57736 -0.96563,-4.66874 z"
                 inkscape:connector-curvature="0" />
            </g>
          </g>
        </svg>
        `
    },
    "Capricorn": {
        "Aries": [46, `<h3>When Aries and Capricorn come together in a love match, they must work hard to maintain their mutual energy.</h3>
        <p>Their approaches can seem almost opposite to one another — Aries is all about acting without bothering to consider where the action is directed or what it will attain, while Capricorn is all about judging whether (or how much) it will benefit them before they take action. Aries moves fast and, to Capricorn, at least, seems to risk it all. Capricorn abhors unnecessary risk. They move at a slower pace, working inexhaustibly toward well-defined goals (usually related to career or other forms of public advancement). Both partners always get where they’re going, only in different ways — and usually where they’re going is totally different, too!.</p>`],
        "Taurus": [98, `<h3>When Taurus and Capricorn come together in a love match, it’s a practical, sensible partnership.</h3>
        <p>These two Signs share a certain down-to-earth logic and interest in efficiency. Taurus is not interested in risking more than is necessary in terms of emotional connection and involvement, and Capricorn is similarly disinterested in risk, but more in terms of money and career. Capricorn’s career is one of the great focuses of their lives; they’re interested in scaling the heights and tend to set very high standards for themselves to adhere to. Taurus has high standards as well, but regarding love, relationships and possessions.</p>`],
        "Gemini": [66, `<h3>When Gemini and Capricorn come together in a love affair, it may be tough for them to remember why they’re together at all, as the ways in which they approach the world couldn’t be more opposite.</h3>
        <p>If they’re operating from a base of love and mutual respect, they’ll be able to overcome most obstacles, but they must work hard. Gemini must have freedom to think outside the bounds; they rely on their quick wits, humor and intellectual prowess to move through life at a fast pace. Capricorn is concerned with advancement and status; they rely on following the rules and finding set, tried-and-true paths to follow toward success, no matter how long it takes. Gemini likes to cut corners; Capricorn likes to be thorough. These two Signs’ challenge as a couple is to learn to maintain a similar pace so they can arrive at the same place at the same time.</p>`],
        "Cancer": [84, `<h3>When Cancer and Capricorn make a love match, it’s a celestial pairing of great tenacity and determination.</h3>
        <p>Capricorn, the Sea Goat, is focused on logic, on being down-to-earth and real; Cancer brings a charge of emotional intensity to the relationship. Both hold one another to high standards tempered by an abiding mutual respect. In a Capricorn mate, Cancer finds dedication, and in return Capricorn comes to love Cancer’s persistence. These two Signs from opposite sides of the Zodiac can come together to create a very successful and secure connection.</p>`],
        "Leo": [35, `<h3>When Leo and Capricorn join together in a love match, they form a mutually supportive union.</h3>
        <p>Capricorn is more conservative, hard working and traditional in outlook. Leo is a firm believer in hard work, but tends to get things done through their charm and social skills. However, both are extremely devoted, especially to teach other. Although they may seem to be an unlikely couple on the surface, their love will grow as they discover similarities.</p>`],
        "Virgo": [96, `<h3>When Virgo and Capricorn join together in a love match, theirs is a pragmatic, smart relationship.</h3>
        <p>Both Signs are highly rational, and both expect a lot of themselves and others. Virgo adores Capricorn’s dedication and intensity, while Capricorn admires Virgo’s intuition and attention to detail. Together they form a solid union based firmly in reality.</p>`],
        "Libra": [55, `<h3>When Libra and Capricorn come together in a love match, they can be a good couple — if they can uncover their sometimes difficult to find similarities.</h3>
        <p>On the surface, these two couldn’t be more different: While Capricorn is quiet and unassuming, Libra tends to be a social butterfly, delighting in visiting with other people. Capricorn is concerned with hard work as a means toward career advancement and recognition; Libra is concerned with beauty, art and balance in life and relationships. This is not to say, however, that there is no meeting point for these two; if they are coming from a base of mutual love and respect, they can work to find their common ground.</p>`],
        "Scorpio": [96, `<h3>When Scorpio and Capricorn make a love match, they get an opportunity to not only enjoy a loving relationship and learn the value of being a pair, but also to grow and mature as individuals.</h3>
        <p>These two may be wary about sharing themselves with one another at first, and this emotional caution may dampen the initial impact of this relationship. These two tend to be a bit cautious (Capricorn) and pensive (Scorpio), and it takes a while for them to feel comfortable with a significant other. Though they may be shy of getting involved and not the quickest to trust and share, these two Signs will discover that they can have quite a profound connection — one of friendship and deep loyalty.</p>`],
        "Sagittarius": [61, `<h3>When Sagittarius and Capricorn join together in a love match, things may start slow and they may feel that they don’t have much to gain from the other.</h3>
        <p>In some ways, Sagittarius and Capricorn are opposites: Sagittarius is easy going, whimsical, seeks knowledge for its own sake, always jumps headfirst into new things, and is typically impatient. Capricorn is detail-oriented and passive, even shy, and is always looking toward the next project. Their differences can actually forge a stronger relationship in the long run, there being vast amounts each partner can learn from the other.</p>`],
        "Capricorn": [75, `<h3>When two Capricorns join together in a love match, they create and contribute to a whole new, exciting element in one another’s lives.</h3>
        <p>The symbol of Capricorn is the Sea Goat, the animal always on an upward climb from the sea to the mountain summit. This is true of the Capricorn couple who magnifies their energy and strength and climb the staircase to a healthy, mutually beneficial relationship. But, all of this ambition and lust for life is bound to make these Goats lock horns, and a dispute between two tempers like these is not to be taken lightly.</p>`],
        "Aquarius": [68, `<h3>When Capricorn and Aquarius join together in a love match, they tend to bring out the most positive attributes of one another.</h3>
        <p>Capricorn is a more cautious, rational outlook on life, while Aquarius is insatiable, fostering an idealistic approach to nearly everything. On the surface, they may seem like total opposites, but once these two set eyes on one another, an unbreakable bond is formed.</p>`],
        "Pisces": [88, `<h3>When Capricorn and Pisces join together in a love match, on the surface, it may appear to be opposites attracting.</h3>
        <p>Capricorn is down-to-earth and regimented, with a very strong work ethic, while Pisces tends to be more emotional and dreamy, and takes on the needs of those around them. This couple is honest, and can be devoted to one another. They admire one another: Capricorn appreciates Pisces’s kind nature, and Pisces is drawn in by Capricorn’s quick wit and tenacity.</p>`],
        "svg": `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
        <!-- Created with Inkscape (http://www.inkscape.org/) -->
        
        <svg
           xmlns:dc="http://purl.org/dc/elements/1.1/"
           xmlns:cc="http://creativecommons.org/ns#"
           xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
           xmlns:svg="http://www.w3.org/2000/svg"
           xmlns="http://www.w3.org/2000/svg"
           xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
           xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
           width="50.86133mm"
           height="50.86133mm"
           viewBox="0 0 718.79998 718.79998"
           id="svg2"
           version="1.1"
           inkscape:version="0.91 r13725"
           sodipodi:docname="CapricornDrawing5.svg">
          <defs
             id="defs4">
            <filter
               inkscape:label="Modified combined Lighting"
               inkscape:menu="Bevels"
               inkscape:menu-tooltip="Basic specular bevel to use for building textures"
               style="color-interpolation-filters:sRGB"
               id="filter125483"
               height="1.04"
               width="1.04"
               y="-0.02"
               x="-0.02">
              <feGaussianBlur
                 stdDeviation="6"
                 in="SourceGraphic"
                 result="result0"
                 id="feGaussianBlur125485" />
              <feDiffuseLighting
                 lighting-color="#ffffff"
                 diffuseConstant="1"
                 surfaceScale="4"
                 result="result5"
                 id="feDiffuseLighting125487">
                <feDistantLight
                   elevation="45"
                   azimuth="235"
                   id="feDistantLight125489" />
              </feDiffuseLighting>
              <feComposite
                 k1="1.4"
                 in2="SourceGraphic"
                 in="result5"
                 result="fbSourceGraphic"
                 operator="arithmetic"
                 id="feComposite125491"
                 k2="0"
                 k3="0"
                 k4="0" />
              <feGaussianBlur
                 result="result0"
                 in="fbSourceGraphic"
                 stdDeviation="6"
                 id="feGaussianBlur125493" />
              <feSpecularLighting
                 specularExponent="25"
                 specularConstant="1"
                 surfaceScale="4"
                 lighting-color="#ffffff"
                 result="result1"
                 in="result0"
                 id="feSpecularLighting125495">
                <feDistantLight
                   azimuth="235"
                   elevation="45"
                   id="feDistantLight125497" />
              </feSpecularLighting>
              <feComposite
                 k3="1"
                 k2="1"
                 operator="arithmetic"
                 in="fbSourceGraphic"
                 in2="result1"
                 result="result4"
                 id="feComposite125499"
                 k1="0"
                 k4="0" />
              <feComposite
                 operator="in"
                 result="fbSourceGraphic"
                 in2="SourceGraphic"
                 in="result4"
                 id="feComposite125501" />
              <feColorMatrix
                 result="fbSourceGraphicAlpha"
                 in="fbSourceGraphic"
                 values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
                 id="feColorMatrix125639" />
              <feGaussianBlur
                 id="feGaussianBlur125641"
                 stdDeviation="1.1000000000000001 1.1299999999999999"
                 result="blur"
                 in="fbSourceGraphic" />
              <feColorMatrix
                 id="feColorMatrix125643"
                 values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 50 0 "
                 result="colormatrix" />
              <feComposite
                 id="feComposite125645"
                 in2="fbSourceGraphic"
                 in="colormatrix"
                 operator="in" />
            </filter>
            <filter
               inkscape:collect="always"
               style="color-interpolation-filters:sRGB"
               id="filter126645"
               x="-0.099000007"
               width="1.198"
               y="-0.099000007"
               height="1.198">
              <feGaussianBlur
                 inkscape:collect="always"
                 stdDeviation="2.4750002"
                 id="feGaussianBlur126647" />
            </filter>
          </defs>
          <sodipodi:namedview
             id="base"
             pagecolor="#ffffff"
             bordercolor="#666666"
             borderopacity="1.0"
             inkscape:pageopacity="0.0"
             inkscape:pageshadow="2"
             inkscape:zoom="0.73734003"
             inkscape:cx="359.39999"
             inkscape:cy="358.72188"
             inkscape:document-units="px"
             inkscape:current-layer="layer1"
             showgrid="false"
             inkscape:window-width="1366"
             inkscape:window-height="705"
             inkscape:window-x="-8"
             inkscape:window-y="-8"
             inkscape:window-maximized="1"
             fit-margin-top="0"
             fit-margin-left="0"
             fit-margin-right="0"
             fit-margin-bottom="0" />
          <metadata
             id="metadata7">
            <rdf:RDF>
              <cc:Work
                 rdf:about="">
                <dc:format>image/svg+xml</dc:format>
                <dc:type
                   rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
                <dc:title></dc:title>
              </cc:Work>
            </rdf:RDF>
          </metadata>
          <g
             inkscape:label="Layer 1"
             inkscape:groupmode="layer"
             id="layer1"
             transform="translate(-770.78894,230.99174)">
            <g
               id="g91390">
              <circle
                 transform="matrix(10,0,0,10,-3421.7007,-4530.6759)"
                 id="circle124396-5"
                 r="30"
                 cy="465.90842"
                 cx="455.18896"
                 style="fill:#000000;fill-opacity:1;stroke:none;stroke-opacity:1;filter:url(#filter126645)" />
              <circle
                 transform="matrix(10,0,0,10,-3421.7007,-4530.6759)"
                 id="circle124396"
                 r="30"
                 cy="463.90842"
                 cx="453.18896"
                 style="fill:#4b0ab3;fill-opacity:1;stroke:none;stroke-opacity:1;filter:url(#filter125483)" />
              <path
                 style="opacity:0.7"
                 id="path4"
                 d="m 1061.6916,-53.50382 c -1.3875,0.0275 -1.6149,1.484922 -1.3074,2.607422 2.215,2.495 5.6002,3.252422 8.6652,4.169922 14.74,4.65 30.1824,6.717578 45.5824,7.492578 18.7075,0.6875 37.4273,0.09242 56.0648,-1.642578 10.2075,-1.7325 21.0728,-1.59 30.5903,2.9125 6.665,2.9375 11.6572,9.080312 13.7597,15.970312 -0.77,1.195 -2.8997,0.417188 -4.2347,0.617188 -6.1325,-9.11 -16.6675,-14.592422 -27.475,-15.619922 -22.305,-2.075 -44.6028,1.432578 -66.8703,2.605078 -31.44,2.5375 -64.6649,3.657422 -94.1524,-9.342578 -4.9425,-2.045 -8.53,-6.694844 -13.7,-8.214844 -3.63,0.6625 -1.3725,5.24 0.6875,6.5 4.4475,4.2225 9.9049,7.279922 15.4899,9.744922 17.555,6.6325 36.5626,8.837578 55.1851,10.205078 15.865,0.185 31.8302,0.629766 47.6727,-0.07773 13.48,-0.26 26.9397,-1.749766 40.4347,-1.684766 7.6625,-0.44 16.035,2.500078 20.725,8.755078 0.9225,0.965 2.1125,4.484844 -0.1375,3.914844 -6.4775,0.425 -12.6849,-1.789844 -19.0199,-2.352344 -0.94,3.235 -0.7449,7.899844 2.5051,10.127344 3.2775,2.3325 7.2773,3.329922 10.9148,4.982422 2.215,1.5 4.7175,2.6525 6.5,4.7125 -3.115,0.175 -6.225,-0.532266 -9.3125,-0.909766 -3.495,0.1475 -7.0225,0.202344 -10.5,0.389844 -4.455,10.82 -4.7297,23.679844 0.7903,34.164844 3.2625,5.835 7.3874,11.185156 12.0449,15.972656 5.56,3.085 11.9198,4.804844 17.0098,8.727344 6.09,6.869999 10.1027,15.242655 13.9902,23.485155 0.9475,2.5875 3.8624,4.365156 6.5699,3.410156 5.9575,-1.6725 10.2027,-7.080156 11.9477,-12.835156 2.1225,-12.727499 -2.1703,-26.317655 2.6047,-38.635155 1.3625,-2.7925 4.7026,-4.912422 4.1226,-8.419922 -0.5175,-9.7875 1.03,-19.480078 1.8125,-29.205078 9.3175,0.2025 22.6025,0.725234 26.925,-9.684766 l 0,-1.525 c -2.8675,-2.35 -6.7924,-2.0325 -10.2074,-2.8625 -6.41,-1.345 -12.9701,-0.885234 -19.4676,-0.965234 -1.2,-8.3 -3.8851,-16.907422 -10.6926,-22.369922 -8.745,-7.035 -19.6975,-11.654844 -30.95,-12.302344 -24.1975,-2.33 -48.1175,3.297266 -72.1675,4.884766 -5.835,0.4525 -11.6949,0.6225 -17.5449,0.5375 -10.305,-0.4375 -20.795,-0.83 -30.6875,-4.0625 -4.16,-1.3375 -8.3699,-2.539844 -12.4274,-4.177344 l -1.7402,0 z m 98.2863,37.515234 c -0.2025,-0.01236 -0.4419,0.01712 -0.7238,0.09492 -2.6475,2.76 -3.8172,6.717344 -5.6672,9.877344 -3.955,-2.14 0.5049,-6.82 -0.7676,-9.85 -4.8875,-0.0125 -5.1852,7.122578 -7.1977,10.467578 -1.2175,-1.7425 -2.64,-4.022422 -1.6425,-6.207422 0.3025,-1.0625 0.615,-2.820234 -1.2375,-2.177734 -3.0125,3.3425 -3.0974,8.065156 -4.2524,12.185156 -4.045,-0.6725 -0.1223,-8.810078 -4.5148,-8.417578 -2.995,3.35 -3.4,8.027344 -4.45,12.202344 -1.9925,-0.49 -1.9853,-3.299844 -2.1028,-4.977344 0.7525,-2.12 -2.35,-3.017344 -3.38,-1.489844 -2.17,2.835 -1.7174,6.6 -2.57,9.8875 -3.9075,0.22 -3.5573,-8.010312 -7.7398,-5.482812 -0.045,3.7675 -0.1274,7.540156 -0.1449,11.310156 -2.3,-0.25 -3.6675,-3.207344 -6.15,-2.652344 -0.8775,3.16 -0.4353,6.534766 -1.0903,9.734766 -1.475,-1.355 -2.5299,-3.682266 -4.6824,-4.047266 -2.1175,3.2525 -1.4075,7.347188 -2.3875,10.954688 -1.985,-0.39 -2.9526,-3.344922 -5.3226,-2.919922 -0.045,3.5125 -0.3175,7.082656 -0.92,10.522656 -1.155,0.5525 -2.8647,-0.06273 -4.1972,0.497266 -0.7575,2.965 0.065,6.085078 -0.018,9.092578 -0.6525,1.5225 -3.0601,-0.6475 -3.4051,1.225 -7.1875,20.122499 -18.75,38.487577 -32.4375,54.80508 -9.29,11.5775 -23.3801,17.25507 -35.4051,25.34257 -10.055,7.275 -20.3799,14.27742 -29.4199,22.83243 -7.41496,6.7125 -10.95738,16.145 -14.58238,25.175 -5.6025,17.1775 -5.9325,37.35266 3.9125,53.09766 9.54748,15.1975 27.36998,23.76234 44.99998,24.40234 l 5.7176,0 c 10.94,-0.2775 22.5223,-2.34992 30.8898,-9.98242 10.7925,-10.5425 17.9324,-25.42024 17.4274,-40.69024 -0.785,-24.325 -22.7725,-45.18976 -46.745,-46.52226 -10.015,-0.97 -21.365,0.93476 -28.4425,8.69726 -6.545,7.3175 -7.8475,17.72516 -7.675,27.14766 0.865,12.3175 12.7851,21.53734 24.7101,21.61484 10.8825,0.93 21.1399,-8.63242 21.5399,-19.43242 1.9325,-0.2825 3.6877,0.99242 4.4652,2.69492 2.1325,5.615 0.3798,12.23008 -4.0227,16.24258 -7.115,5.81 -16.8424,10.23274 -26.1199,7.31524 -6.46,-2.035 -13.61,-3.40782 -18.5425,-8.44532 -6.3575,-6.4375 -7.8499,-15.95976 -7.6274,-24.63476 -0.2475,-10.0375 2.7026,-20.94492 10.6301,-27.64492 6.435,-5.375 14.9174,-7.41782 23.1199,-7.88282 11.275,-0.7825 23.0023,1.02508 32.9723,6.56758 10.7175,5.97 18.3325,16.38758 22.455,27.79258 0.485,1.22 0.7003,3.09758 2.5528,2.73008 18.43,2.5725 37.6473,4.02008 55.8148,-0.80742 -5.245,-5.6125 -10.3024,-11.6475 -13.6699,-18.6 -1.0525,-1.92 -1.2626,-6.3975 2.0574,-4.8625 8.3175,16.08 23.73,26.82992 38.05,37.24492 11.105,7.7 23.8625,13.26008 33.375,23.10508 1.15,1.38 3.2575,2.60492 2.8625,4.68242 -11.2325,-1.3625 -23.8452,1.78758 -34.0977,-4.20742 -4.2225,0.945 -7.8296,5.96742 -12.8046,4.61992 -4.2425,-2.005 -6.325,-6.46742 -8.7625,-10.20742 -7.9325,0.7975 -16.2104,3.29726 -22.2828,8.68476 5.1824,5.2175 12.1725,7.8575 18.78,10.75 5.18,2.195 10.8677,3.51774 16.5102,2.79024 19.465,0.14 39.1798,-1.89524 58.4523,1.68476 2.87,-0.1325 6.4126,-1.34758 7.0301,-4.55508 1.17,-5.94 -2.2598,-11.76984 -6.8273,-15.33984 -13.895,-12.3225 -26.8301,-26.09992 -37.4176,-41.28242 13.9125,-2.375 25.3273,-11.17992 37.0023,-18.48242 3.305,-2.55 7.3301,-3.9275 11.4301,-4.5125 2.3675,-0.0275 4.74,-0.0276 7.1125,-0.0676 2.1925,0.3125 5.1375,0.51734 5.5125,3.21484 3.065,12.475 2.5351,25.69274 0.2051,38.24024 3.135,1.465 5.3923,5.38234 3.5273,8.65234 -2.3875,4.4275 -8.7026,2.14484 -11.6551,5.85234 -2.5425,2.8425 -1.7775,7.01016 -1.5375,10.46016 0.53,5.7025 -0.3625,11.61242 1.025,17.20742 0.43,2.2175 3.1327,2.46766 4.2602,0.58516 6.6925,-8.015 12.8225,-16.53492 18.3875,-25.36992 4.975,-7.37 2.8476,-16.69016 2.1176,-24.96016 -0.8525,-5.6875 -0.085,-11.45266 -0.5949,-17.16016 -0.3275,-10.335 3.7748,-20.00218 5.6773,-29.97969 0.19,-5.8025 -6.7277,-8.81008 -11.6602,-6.99258 -16.895,3.9425 -34.3797,3.16477 -51.5222,4.37227 -1.9475,8.5575 -3.0402,17.90024 -8.8602,24.87774 -3.4075,4.775 -8.8397,7.9525 -14.6347,8.775 -2.5225,-3.27 -3.3101,-7.4925 -2.6426,-11.525 0.42,-7.225 0.8374,-14.56774 -0.4176,-21.72774 -1.045,-10.47 -7.375,-19.425 -14.1625,-27.075 -6.535,-7.85 -14.8427,-14.70969 -24.8477,-17.45469 4.4125,-0.81 9.58,2.18977 14.1,3.44727 21.435,7.825 32.1051,32.17523 31.2176,53.79024 0.3325,4.5025 -1.9274,8.67718 -1.8949,13.10468 0.3725,3.185 4.9423,2.57532 6.2898,0.39532 9.5225,-12.11 8.64,-29.20509 3.225,-42.88009 -7.0425,-14.5175 -18.5047,-26.19515 -29.2722,-37.972651 -5.005,-6.6975 -5.9575,-15.282578 -7.5,-23.255077 -2.565,-14.04 -0.9025,-28.612266 2.8625,-42.272266 0.088,-3.5325 5.6301,-3.304922 4.6426,0.392578 -6.125,27.92 0.1449,59.309921 19.5074,80.869916 7.055,7.5025 12.445,16.50235 15.925,26.17735 0.3525,-10.7 -4.5899,-20.5675 -8.5449,-30.3 -4.5875,-12.412501 -2.7476,-25.969767 -0.093,-38.584766 -9.405,-6.9075 -16.97,-17.16 -17.9875,-29.0875 -1.2775,-11.7875 2.8124,-23.155 4.6949,-34.6125 -2.45,-1.4325 -4.6849,-3.275156 -6.5324,-5.422656 -0.7499,-1.35711 0.7157,-5.3528 -1.2414,-5.472266 z m 50.5562,35.138672 c 5.0402,-0.03568 9.4329,3.093204 13.2278,6.158594 2.6525,2.195 4.585,5.88 2.9625,9.2875 -3.71,2.5025 -7.7827,-1.0525 -10.2227,-3.775 -2.7225,-3.63 -6.3023,-7.295078 -7.5523,-11.555078 0.5353,-0.075 1.0633,-0.112324 1.5847,-0.116016 z m -177.2101,40.28164 c -0.5516,-0.0105 -1.0972,0.08266 -1.5422,0.282032 l -0.1977,0.03008 c -5.82,1.1975 -11.5823,2.897344 -17.0523,5.214843 -10.5075,3.39 -19.5401,11.129922 -23.7476,21.444922 -2.19,4.265 -3.4249,8.925077 -5.2699,13.330077 -0.82,-0.09 -1.6151,-0.32766 -2.41762,-0.51016 -5.29,-1.7925 -10.7225,-3.30218 -16.27499,-4.00468 -4.4625,-0.6125 -9.07743,-0.85774 -13.51993,-0.0152 -6.77,1.0475 -13.32507,4.355 -18.44257,8.8 -4.52,4.365 -9.15493,9.00024 -12.03243,14.65274 l 0,2.5 c 2.7075,1.4825 5.32766,-2.32516 7.79766,-3.42266 6.305,-3.3025 13.75242,-3.82266 20.65742,-2.42266 6.025,1.235 11.61727,3.92516 16.77227,7.22266 5.94001,4.3325 10.79531,9.88243 15.57031,15.38243 0.91248,0.6625 1.32488,4.24992 2.96988,2.84492 3.8425,-3.2575 8.0125,-6.14235 11.7575,-9.50235 1.235,-0.82 2.4798,-1.655 3.5148,-2.725 2.8425,-2.2275 5.7951,-4.3375 8.4676,-6.7625 0.065,-0.0625 0.1951,-0.18734 0.2601,-0.25234 0.1795,-0.12202 0.3439,-0.24899 0.4973,-0.3793 0.8759,-0.60015 1.9657,-1.07505 2.4551,-1.95586 -0.615,-3.765 -0.9799,-7.58008 -1.4649,-11.35508 -0.01,-1.235 0.022,-2.46 -0.018,-3.6875 0.365,-10.972497 3.3149,-22.097575 10.5824,-30.580075 2.285,-2.725 4.9951,-5.012422 7.7176,-7.282422 1.82,-1.335 4.1551,-2.2325 5.5176,-4.037499 0.8044,-1.815 -0.903,-2.777852 -2.5578,-2.809376 z m 165.0676,9.889453 c -3.2225,5.465 -4.5224,12.150078 -3.7524,18.392578 0.8175,9.332503 6.7577,17.932263 13.9352,23.497263 0.9975,1.4325 3.7647,0.0627 2.6672,-1.76484 -1.1225,-1.51 -1.69,-3.25235 -1.6575,-5.13985 -0.037,-4.4325 -0.2948,-8.86757 0.01,-13.292573 1.55,-3.16 1.7048,-7.104922 -0.4527,-10.082422 -2.9575,-4.3175 -6.1225,-8.965156 -10.75,-11.610156 z"
                 inkscape:connector-curvature="0" />
            </g>
          </g>
        </svg>
        `
    },
    "Aquarius": {
        "Aries": [79, `<h3>When Aries and Aquarius come together in a love match, the combination of Aquarius vision and Aries action makes them a highly creative pair.</h3>
        <p>Their relationship is anything but static; they can be competitive, but life with these two is never dull! Zodiac Signs that are two apart tend to have a special connection, and these are no exception. They are great friends as they communicate really well. They have a special understanding of one another’s idealistic, enthusiastic outlook on life. They both crave excitement and new experiences — the wilder and stranger, the better. They’re both into thrills and showing off.</p>`],
        "Taurus": [57, `<h3>When Taurus and Aquarius come together, they can move mountains — if they can figure out how to coordinate their efforts.</h3>
        <p>Taurus’s practical, down-to-earth approach to life is about as opposite as can be to Aquarius’s unconventional, out-of-this-world approach to just about everything! Taurus resists change and Aquarius is the most progressive of all 12 Signs of the Zodiac. How do these two get along, then. They may appear to have few common interests, but they share a very strong desire to succeed — which means they may make better business partners than lovers.</p>`],
        "Gemini": [84, `<h3>When Gemini and Aquarius come together in a love affair, the pair can enjoy a wonderfully stimulating mental connection.</h3>
        <p>Gemini is in love with ideas, and visionary Aquarius is full of them. Both of these Signs need their independence; they can easily provide this for one another since they understand the need so well. The only trouble that may arise is if Gemini begins to think Aquarius is too stubborn in their thinking, or if Gemini dawdles a bit too much for Aquarius’s fast-paced, forward-moving standards. This type of problem isn’t likely to cause a major disturbance; in general they work very well together and understand one another on a very deep level.</p>`],
        "Cancer": [28, `<h3>When Cancer and Aquarius make a love match, it can be a case of opposites attracting.</h3>
        <p>Cancer takes an emotional approach to life, Aquarius, an offbeat, unconventional approach. While Cancer often retreats into its shell, Aquarius takes every opportunity to be the extrovert, the organizer and party animal. They love to find themselves amongst friends; social settings are simply their thing! If a Cancer and an Aquarius can find a way to combine these qualities in a positive way, they can go anywhere together.</p>`],
        "Leo": [68, `<h3>When Leo and Aquarius join together in a love match, the merging of Aquarian foresight and Leo creativity causes people to take notice.</h3>
        <p>This partnership is energetic and unstoppable, and although occasional competitions may occur, there is never a dull moment for these two. Their Signs are congenial and have a good relationship. Both tend to be idealistic and highly motivated. Both are attracted to all things novel, and are thrill-seekers; they may even occasionally turn life into a giant game of Truth or Dare.</p>`],
        "Virgo": [31, `<h3>When Virgo and Aquarius join together in a love match, they bring out either the best or worst in one another.</h3>
        <p>Virgo has a more rigid, theory-oriented approach to life. The poetic Aquarian approach, on the other hand, knows nothing of the scientific world. But these two lovers may actually thrive on their differences; they grow together as they learn about one another.</p>`],
        "Libra": [90, `<h3>When Libra and Aquarius join in a love match, their relationship can serve to heighten and strengthen both Signs’ consciousness.</h3>
        <p>These two connect on a high mental level; they share a love of art, people and culture; they both abhor restrictive influences in their lives. They are likely to get along well because they have such similar needs and will not require more of one another than they’re both willing to give. Both Signs are also very energetic, enthusiastic types; this relationship is not likely to become stagnant.</p>`],
        "Scorpio": [73, `<h3>When Scorpio and Aquarius make a love match, it is a fusion of two very different life philosophies and many very different needs.</h3>
        <p>There is much chance for friction here. Where Scorpio faces their inner emotional world directly and with an intense energy, thinking deeply about the more hidden undercurrents of life, Aquarius takes that same sort of energy and turns it outward. With their unusual, idealistic and, above all else, very social outlook on life, Aquarius seems an odd choice for the more introverted Scorpio. Aquarius needs a crowd to feel stimulated, and they’re always looking around the room for the next interesting person to get to know. Scorpio, on the other hand, desires engaging, probing and very intimate time with their romantic mates. This pair may seem to have very little in common, but they both have such strong wills that, when focused on their relationship, can get them what they need and want.</p>`],
        "Sagittarius": [90, `<h3>When Sagittarius and Aquarius join together in a love match, Aquarian ideals and Sagittarian knowledge combine to make them a creative and unique couple.</h3>
        <p>This partnership is uninhibited, and while it can get competitive with these two, there’s never a dull moment! Underneath any romantic overtone, there exists a great friendship; their Signs are two apart and this tends to give them an ability to communicate well as well as an excellent rapport. Both are idealistic and excited about life, and together they enjoy great times. Together, the two can fly without fear of falling.</p>`],
        "Capricorn": [68, `<h3>When Capricorn and Aquarius join together in a love match, they tend to bring out the most positive attributes of one another.</h3>
        <p>Capricorn is a more cautious, rational outlook on life, while Aquarius is insatiable, fostering an idealistic approach to nearly everything. On the surface, they may seem like total opposites, but once these two set eyes on one another, an unbreakable bond is formed.</p>`],
        "Aquarius": [45, `<h3>When two Aquarians join together in a love match, they focus on the more positive aspects of humanity.</h3>
        <p>This pair is loves to make friends, help others and, on a grander scale, contemplate social change. They tend to be active and outgoing and work best under pressure. This couple gets along quite well, perhaps incurring the slight jealousies of all their friends. Together, they enjoy following current events and discussing modern, progressive ideas.</p>`],
        "Pisces": [45, `<h3>When Aquarius and Pisces join together in a love match, there is much compassion and creation.</h3>
        <p>These partners are idealistic as individuals as well as they are together. Pisces flows with their dream-like surroundings, and Aquarius is constantly coming up with new inventions and ways of doing things. This relationship digs deep for the truth of the matter at hand, and both partners are always looking for solutions to problems. They both tend to be introspective. Aquarius can often be quick to judge those who don’t share their vision, while Pisces is often too compassionate, even for those who don’t necessarily deserve it.</p>`],
        "svg": `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
        <!-- Created with Inkscape (http://www.inkscape.org/) -->
        
        <svg
           xmlns:dc="http://purl.org/dc/elements/1.1/"
           xmlns:cc="http://creativecommons.org/ns#"
           xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
           xmlns:svg="http://www.w3.org/2000/svg"
           xmlns="http://www.w3.org/2000/svg"
           xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
           xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
           width="50.86133mm"
           height="50.86133mm"
           viewBox="0 0 718.79998 718.79998"
           id="svg2"
           version="1.1"
           inkscape:version="0.91 r13725"
           sodipodi:docname="AquariusDrawing5.svg">
          <defs
             id="defs4">
            <filter
               inkscape:label="Modified combined Lighting"
               inkscape:menu="Bevels"
               inkscape:menu-tooltip="Basic specular bevel to use for building textures"
               style="color-interpolation-filters:sRGB"
               id="filter125483"
               height="1.04"
               width="1.04"
               y="-0.02"
               x="-0.02">
              <feGaussianBlur
                 stdDeviation="6"
                 in="SourceGraphic"
                 result="result0"
                 id="feGaussianBlur125485" />
              <feDiffuseLighting
                 lighting-color="#ffffff"
                 diffuseConstant="1"
                 surfaceScale="4"
                 result="result5"
                 id="feDiffuseLighting125487">
                <feDistantLight
                   elevation="45"
                   azimuth="235"
                   id="feDistantLight125489" />
              </feDiffuseLighting>
              <feComposite
                 k1="1.4"
                 in2="SourceGraphic"
                 in="result5"
                 result="fbSourceGraphic"
                 operator="arithmetic"
                 id="feComposite125491"
                 k2="0"
                 k3="0"
                 k4="0" />
              <feGaussianBlur
                 result="result0"
                 in="fbSourceGraphic"
                 stdDeviation="6"
                 id="feGaussianBlur125493" />
              <feSpecularLighting
                 specularExponent="25"
                 specularConstant="1"
                 surfaceScale="4"
                 lighting-color="#ffffff"
                 result="result1"
                 in="result0"
                 id="feSpecularLighting125495">
                <feDistantLight
                   azimuth="235"
                   elevation="45"
                   id="feDistantLight125497" />
              </feSpecularLighting>
              <feComposite
                 k3="1"
                 k2="1"
                 operator="arithmetic"
                 in="fbSourceGraphic"
                 in2="result1"
                 result="result4"
                 id="feComposite125499"
                 k1="0"
                 k4="0" />
              <feComposite
                 operator="in"
                 result="fbSourceGraphic"
                 in2="SourceGraphic"
                 in="result4"
                 id="feComposite125501" />
              <feColorMatrix
                 result="fbSourceGraphicAlpha"
                 in="fbSourceGraphic"
                 values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
                 id="feColorMatrix125639" />
              <feGaussianBlur
                 id="feGaussianBlur125641"
                 stdDeviation="1.1000000000000001 1.1299999999999999"
                 result="blur"
                 in="fbSourceGraphic" />
              <feColorMatrix
                 id="feColorMatrix125643"
                 values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 50 0 "
                 result="colormatrix" />
              <feComposite
                 id="feComposite125645"
                 in2="fbSourceGraphic"
                 in="colormatrix"
                 operator="in" />
            </filter>
            <filter
               inkscape:collect="always"
               style="color-interpolation-filters:sRGB"
               id="filter126641"
               x="-0.099000007"
               width="1.198"
               y="-0.099000007"
               height="1.198">
              <feGaussianBlur
                 inkscape:collect="always"
                 stdDeviation="2.4750002"
                 id="feGaussianBlur126643" />
            </filter>
          </defs>
          <sodipodi:namedview
             id="base"
             pagecolor="#ffffff"
             bordercolor="#666666"
             borderopacity="1.0"
             inkscape:pageopacity="0.0"
             inkscape:pageshadow="2"
             inkscape:zoom="0.73734003"
             inkscape:cx="77.304903"
             inkscape:cy="358.04376"
             inkscape:document-units="px"
             inkscape:current-layer="layer1"
             showgrid="false"
             inkscape:window-width="1366"
             inkscape:window-height="705"
             inkscape:window-x="-8"
             inkscape:window-y="-8"
             inkscape:window-maximized="1"
             fit-margin-top="0"
             fit-margin-left="0"
             fit-margin-right="0"
             fit-margin-bottom="0" />
          <metadata
             id="metadata7">
            <rdf:RDF>
              <cc:Work
                 rdf:about="">
                <dc:format>image/svg+xml</dc:format>
                <dc:type
                   rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
                <dc:title></dc:title>
              </cc:Work>
            </rdf:RDF>
          </metadata>
          <g
             inkscape:label="Layer 1"
             inkscape:groupmode="layer"
             id="layer1"
             transform="translate(-20.788944,-1269.0086)">
            <g
               id="g91395">
              <circle
                 transform="matrix(10,0,0,10,-3421.7007,-4530.6759)"
                 id="circle124384-3"
                 r="30"
                 cy="615.90845"
                 cx="380.18896"
                 style="fill:#000000;fill-opacity:1;stroke:none;stroke-opacity:1;filter:url(#filter126641)" />
              <circle
                 transform="matrix(10,0,0,10,-3421.7007,-4530.6759)"
                 id="circle124384"
                 r="30"
                 cy="613.90845"
                 cx="378.189"
                 style="fill:#710cb3;fill-opacity:1;stroke:none;stroke-opacity:1;filter:url(#filter125483)" />
              <path
                 style="fill:#000000;fill-opacity:1;opacity:0.7"
                 id="path4"
                 d="m 331.6431,1428.084 c -6.13,0.59 -12.17023,3.0327 -16.37773,7.6477 -5.2825,6.685 -10.92492,14.7296 -10.31992,23.6546 0.31,4.105 4.465,6.5125 5.4625,10.35 0.245,4.3275 -2.65,7.8801 -4.35,11.6426 -1.665,2.045 -3.58258,4.8201 -6.68008,3.8801 -10.3575,-1.23 -22.69977,3.1949 -26.43477,13.7449 -2.11,4.2775 -2.41273,8.9724 -2.39023,13.6324 -0.6575,3.23 -3.81,5.095 -5.325,7.9125 -3.9375,5.1575 -4.12477,11.8929 -5.63477,17.8954 -3.465,0.295 -7.07257,2.4025 -8.05507,5.9125 -2.545,8.045 1.48242,18.0973 9.18242,21.7648 8.075,2.8675 17.36265,-3.3598 16.88515,-12.1523 2.51,-0.955 5.60985,-1.1578 7.68985,-3.1153 1.705,-0.8525 2.535,-3.2447 1.2875,-4.8097 -2.07,-3.315 -3.87985,-6.7651 -5.57735,-10.2801 -0.5625,-2.6675 -3.54523,-6.1078 -0.74023,-8.2403 4,7.315 6.02492,17.0052 14.31992,20.7477 4.495,1.2525 9.71758,2.915 14.11758,0.5 2.795,-1.6525 4.01008,-5.0174 4.00508,-8.1324 0.855,-8.41 -2.16008,-16.4299 -4.81758,-24.2324 -0.9425,-1.9125 1.08516,-2.1177 2.38516,-1.8602 2.6775,11.46 9.97242,21.7125 18.91992,29.3625 4.575,3.75 10.50242,7.2077 16.60742,5.7227 5.705,-1.835 8.43266,-7.7225 10.32266,-12.9625 0.04,-2.0075 1.37492,-0.5275 1.99492,0.075 10.055,9.2325 23.71984,15.0749 37.52734,13.3699 6.64,1.7425 13.81774,5.5576 20.65273,2.4926 6.285,-2.7475 6.42226,-10.6604 5.88476,-16.4454 -6.10748,0.555 -10.71218,-3.8571 -14.67968,-7.8171 -2.62,-2.8725 -5.52281,-5.495 -8.43281,-8.0625 -4.1475,-3.2375 -9.06742,-5.4575 -14.15742,-6.7375 -4.4175,-1.425 -9.11242,-1.385 -13.69492,-1.6625 -0.485,-5.125 -3.21,-10.135 -7.675,-12.825 -5.905,-3.7175 -13.15235,-4.1804 -19.93985,-4.2329 -0.8175,0.115 -0.99015,-0.8046 -1.34765,-1.3296 -2.89,-4.9125 -7.44766,-9.1678 -13.13516,-10.4528 -2.1475,-0.585 -0.3625,-3.2998 -0.6125,-4.8023 1.1975,-2.77 1.65766,-7.4801 4.73516,-8.6176 1.565,2.925 -3.01992,7.1352 -1.20742,10.3977 1.86,0.7725 3.7075,1.5846 5.45,2.6046 0.975,0.82 1.94726,1.6551 3.00976,2.3676 2.1475,1.635 3.38758,4.0325 4.40508,6.4625 2.2275,-0.1225 4.85742,0.8424 6.83242,-0.4051 2.185,-3.0675 1.5375,-7.1797 2.275,-10.6722 1.86,-2.17 5.88274,-0.5376 7.21524,-3.4301 0.17,-1.08 -0.6925,-1.9675 -1.225,-2.8125 -2.66,-5.1125 -2.33266,-10.7323 -1.72266,-16.3023 0.37,-1.525 -2.1075,-0.525 -2.8125,-0.975 l -0.21992,-0.037 c -3.085,-0.6675 -6.9125,-1.9101 -8.7625,1.4949 -0.245,0.26 -0.47235,0.5351 -0.68985,0.8176 -2.0325,1.8325 -4.31,4.1396 -7.375,3.3671 -2.0625,-0.6925 -3.20281,1.5826 -5.09531,1.6301 -1.775,-1.425 -0.60734,-4.1872 1.52266,-4.3347 0.105,0.01 0.31234,0.01 0.41484,0.015 3.015,0.1775 7.23,1.0173 8.75,-2.4977 0.055,-0.075 0.16531,-0.2197 0.22031,-0.2922 1.1875,-0.895 1.74727,-2.2751 2.64727,-3.3926 5.325,-1.6475 11.27766,3.2773 16.18516,1.2223 1.26,-3.73 0.0776,-8.0975 -1.73243,-11.5625 -1.71,-4.15 -4.6225,-7.9373 -8.5,-10.2648 -4.845,-3.4925 -10.935,-4.3325 -16.7125,-4.9375 l -4.475,0 z m 94.76874,22.9473 c -1.00214,0.021 -2.01664,0.1475 -3.03632,0.3925 -7.115,3.89 -7.20492,13.4878 -7.23242,20.4403 -2.6275,1.7225 -5.37007,3.3572 -8.09257,4.9347 -2.3,-2.8975 -4.30758,-6.0125 -6.51758,-8.975 -8.3475,-10.16 -21.27516,-18.3347 -34.94766,-15.6347 1.0075,5.6225 -6.60992,5.2147 -6.60742,10.4097 -0.335,5.845 4.71023,11.1125 4.90273,17.0875 -1.97,2.3225 -9.00765,0.8928 -7.77265,5.4528 -0.465,2.215 -0.68985,4.4751 -1.28985,6.6676 8.6625,1.1625 17.185,7.8173 19.35,16.6148 8.68,1.235 17.65,3.0748 24.875,8.3898 0.4625,0.1625 1.04493,1.0852 1.55743,0.5852 1.7725,-5.0225 4.0875,-9.9301 7.25,-14.2301 5.5025,-5.7175 14.69475,-5.3872 21.49725,-2.4097 7.09,3.6675 7.00282,12.7799 6.75782,19.6574 -0.575,21.8025 -9.63516,42.5848 -8.39766,64.5023 0.1675,11.1575 3.09992,22.0303 4.18242,33.1028 2.0125,14.575 0.31008,29.6022 -3.55742,43.7222 1.265,1.105 2.56742,2.8553 4.08242,3.2653 7.2475,-14.8625 7.61242,-32.1152 5.69492,-48.2352 -3.13,-17.355 -7.24968,-35.1149 -3.65468,-52.7574 3.375,-20.895 12.35984,-42.8501 4.06484,-63.6926 0.3825,-1.5825 3.98508,-0.93 4.21758,0.825 0.99,3.88 2.4325,7.6099 3.8875,11.3324 3.17,10.9575 2.9175,22.8249 0.1375,33.8449 -3.9725,17.6225 -8.87258,35.9729 -4.50508,54.0079 3.3625,10.2425 7.96758,20.34 8.81758,31.1875 0.245,4.2925 -0.14774,8.5847 0.0348,12.8847 -1.5275,15.4475 -6.41,30.2499 -13.05,44.2074 0.96,1.59 3.76,7.0601 4.725,2.7426 5.265,-9.395 8.56524,-19.7099 11.47774,-30.0324 3.38,-12.32 4.26234,-25.6326 0.47734,-37.9551 -7.6225,-18.4275 -13.86234,-38.6701 -9.55234,-58.6926 1.7775,-6.195 3.92734,-12.3322 5.27734,-18.6472 3.535,-12.74 4.085,-26.825 -0.15,-39.4875 7.79,8.495 9.775,20.8523 10.2125,32.0523 1.4975,24.23 -9.20492,47.5827 -6.11992,71.8352 0.555,3.085 0.6575,6.3975 2.4125,9.1125 7.065,16.4825 12.59016,33.8901 13.84766,51.8676 -0.51,14.735 -3.14,30.4371 -13.15,41.9171 -3.22,2.2875 -1.36008,5.4152 0.49492,7.7852 14.2125,-17.0525 21.85234,-40.5426 16.50234,-62.5176 -8.365,-22.7775 -19.1025,-46.515 -14.8375,-71.35 3.0425,-16.275 7.9,-32.6825 7.525,-49.1875 2.6175,7.275 3.02,15.1275 2.825,22.7875 0.5075,13.6625 -5.14008,26.4951 -6.18008,39.9926 -0.725,9.675 0.007,19.6973 3.6125,28.8023 5.0425,8.2375 10.19008,16.475 14.24258,25.2625 3.29,9.2325 3.42992,19.2451 2.80742,28.9176 -2.61,17.395 -10.7275,33.5824 -21.1625,47.5699 1.02,1.76 1.5625,4.0801 2.65,5.6551 9.255,-13.385 18.40266,-27.5423 22.47266,-43.4648 2.52,-7.1875 2.48008,-15.4977 1.04258,-23.0352 -0.99,-8.205 -5.34758,-15.3501 -8.70508,-22.7426 -6.0925,-12.555 -12.53016,-25.6646 -12.41016,-39.9671 0.9175,-9.95 3.96766,-19.5201 5.82266,-29.3051 3.2925,-19.735 2.95266,-40.7776 -4.96484,-59.4301 -4.4,-10.3025 -11.70274,-18.9201 -19.69024,-26.6051 -1.2725,-10.32 -1.28726,-21.5749 -7.37226,-30.5824 -3.35562,-5.9806 -9.76618,-11.0235 -16.78126,-10.8777 z m -46.50155,10.1379 c 4.67,0.61 7.83508,5.165 10.88008,8.3875 3.3325,3.085 -1.94984,5.7323 -4.23984,7.2773 -3.615,-3.6575 -7.24516,-7.5352 -11.53516,-10.5102 1.31,-1.925 2.86742,-3.9746 4.89492,-5.1546 z m -26.76797,0.4316 c 2.22128,0.1161 3.27321,3.6577 0.78555,4.4031 -2.805,1.14 -4.91227,-3.6647 -1.50977,-4.3222 0.25219,-0.068 0.49444,-0.093 0.72422,-0.081 z m 78.32772,1.0516 c 3.91974,-0.1215 6.21844,3.6208 7.70548,6.7765 2.825,6.8075 5.625,13.9078 5.8375,21.3528 -4.33,-1.7375 -10.07024,-3.9029 -13.49024,0.8046 -4.48,-5.5225 -6.21468,-13.1046 -6.21718,-20.1421 -0.58,-3.7525 1.52468,-8.5951 5.77968,-8.7676 0.12984,-0.012 0.25832,-0.02 0.38476,-0.024 z m -14.13358,38.9421 c -0.36194,-0.01 -0.73898,0.037 -1.13086,0.1321 -2.64,0.615 -4.63281,2.8547 -5.94531,5.0972 -1.49,1.6225 -2.49,3.7403 -3.175,5.8153 -2.045,3.0525 -4.3125,8.83 -0.7875,11.65 3.095,3.4425 7.08008,6.2948 11.28009,8.2773 1.35248,0 4.1999,1.8949 4.6824,-0.2676 2.235,-7.47 2.38782,-15.4998 0.97032,-23.1273 -0.31266,-3.0948 -2.39528,-7.5283 -5.89414,-7.577 z m -96.68867,40.6719 c -0.4625,1.7175 -0.66484,3.4999 -0.83984,5.2699 5.5425,16.3175 17.12234,29.515 25.30234,44.4875 0.445,0.865 -0.46469,1.6277 -0.79219,2.3602 -4.95,7.83 -7.76281,17.405 -5.99531,26.65 1.4,8.055 6.48531,16.0749 14.58281,18.6574 13.22,4.385 31.65469,-4.6298 31.34219,-19.8773 5.7275,3.0925 9.45531,8.69 13.28281,13.7625 8.105,12.435 16.52993,25.2897 19.71992,39.9972 0.985,3.8025 0.44992,11.3401 -4.98007,11.0801 3.40749,-4.7675 1.8575,-11.0349 0.4125,-16.2199 -5.1125,-14.59 -13.5475,-27.9352 -23.8375,-39.4227 -0.505,-0.435 -0.95508,-1.295 -1.74258,-1.1375 -3.9875,9.575 -14.58734,15.3904 -24.68984,15.6079 3.6275,7.795 9.21234,14.6347 15.07734,20.8847 8.3775,10.155 21.20516,16.445 27.06016,28.6625 1.525,4.09 3.48992,8.1249 6.21992,11.5449 0.6325,1.14 1.29508,2.2704 2.05508,3.3454 1.88499,-3.6825 3.94999,-8.015 8.19999,-9.3875 4.8125,-1.1325 9.19258,1.8925 12.63008,4.875 0.6175,0.295 1.58492,1.7674 -0.28008,0.8949 -5.535,-0.39 -12.49758,-2.8377 -16.89258,1.7773 -1.99249,1.9125 -1.8175,4.8978 -1.675,7.4278 0.8775,5.9225 3.67016,11.4874 7.47266,16.0699 0.9275,1.595 2.1125,3.0273 3.45,4.3023 2.11,2.52 4.38968,4.9874 7.04218,6.9449 0.71,0.87 1.44508,1.795 2.51758,2.2375 2.9125,2.9475 6.28524,5.4353 9.69024,7.7903 1.8975,1.5825 3.89984,3.0275 5.98984,4.35 1.855,1.215 0.8175,-2.8026 2.025,-3.7176 2.875,7.3525 6.21234,14.5174 9.00234,21.9074 0.4675,4.8225 0.96008,12.6502 8.05508,10.9352 3.37,0.135 6.73774,0.4372 10.11524,0.1972 3.065,0.08 6.11968,0.4152 9.19218,0.3227 1.25,-0.02 2.52524,0.042 3.77774,-0.1051 4.07,0.9 8.33726,-0.1524 12.44726,0.5926 l 1.35,0 c 0.6,-0.1725 1.25508,-0.2675 1.88008,-0.4 1.125,-0.2325 2.04008,-0.9623 2.95508,-1.6148 l 0,-1.8 c -5.6775,-5.04 -13.62758,-6.0651 -20.00508,-9.9301 -6.82,-4.135 -13.54742,-8.6226 -19.04492,-14.4551 -4.545,-4.64 -6.33258,-11.0527 -9.38008,-16.6227 -3.93,-8.675 -8.26226,-17.1825 -13.07226,-25.4 -2.6675,-4.96 -4.97258,-10.2649 -8.74258,-14.5074 -1.7675,-3.75 -5.89492,-6.7273 -5.08242,-11.3398 0.007,-7.98 -2.11016,-16.425 -7.86016,-22.25 -2.7825,-1.96 -5.81734,-3.6602 -8.21484,-6.1102 -2.3,-12.46 -8.30757,-23.9524 -15.29257,-34.3949 -2.95,-4.265 -6.05993,-8.5725 -10.09493,-11.8875 -3.325,-4.36 -8.42273,-6.4027 -13.30273,-8.4227 -2.6625,-0.8175 -3.87734,-5.1522 -0.65234,-6.1097 2.23,-0.385 1.98476,-3.7028 0.49726,-4.7903 -3.7675,-7.56 -8.59469,-14.7949 -10.40469,-23.1574 -0.03,-3 -0.89265,-8.1526 2.68985,-9.4926 3.555,0.6325 6.94508,2.3852 10.65508,1.9352 5.4825,-0.32 10.55726,-4.7723 10.50976,-10.4773 -12.4925,0.1275 -24.70976,-4.0402 -35.48476,-9.8977 -0.2175,5.625 -4.76493,10.8727 -10.65743,11.1977 -11.105,1.8425 -21.17281,-5.2803 -28.18281,-13.1403 z m -28.07656,7.6563 c -0.38332,0.038 0.0535,1.3305 0.23164,1.8386 0.465,3.735 1.62766,7.7352 3.74766,10.7602 1.2275,2.7625 3.70507,4.8823 5.50507,7.2898 0.87,2.4375 3.21977,4.0626 5.24727,5.4926 2.005,2.3575 4.61773,4.2978 6.99023,6.2528 1.4625,2.385 5.37469,4.5447 3.70469,7.7472 -3.095,5.9875 -7.08484,11.8776 -7.87734,18.7051 l -0.10742,0.1602 c -1.1925,4.5575 -1.28024,9.4596 -0.44024,14.0796 0.2025,2.0125 0.38531,4.2904 1.49531,6.0454 1.15,3.34 3.2925,6.5571 6.4125,8.3296 7.495,4.77 19.35993,6.5702 26.28243,-0.027 -2.695,-1.265 -4.86993,-3.3076 -7.10743,-5.1551 -3.075,-4.42 -4.85023,-9.6151 -5.21523,-14.9801 0.15,-1.33 0.11016,-2.6699 0.0352,-3.9949 0.5575,-5.485 2.23,-10.8401 3.4875,-16.2176 l 0.0426,-0.1972 c 1.53,-3.12 1.89243,-7.2324 0.41993,-10.6199 -2.7675,-6.8875 -7.59508,-12.6952 -11.20508,-19.0977 -2.4325,-4.92 -5.20992,-10.1502 -7.95742,-14.7352 -7.27,3.5975 -16.25743,3.5851 -22.99493,-1.2199 -0.35,-0.3419 -0.5691,-0.4688 -0.69687,-0.4562 z m 13.72109,74.9871 c -1.55839,0.016 -2.43125,1.8905 -3.26679,2.9344 -5.8175,9.1825 -9.9725,19.3921 -12.5375,29.9421 -0.885,2.785 -1.55266,5.6625 -1.99766,8.55 -0.72,2.5375 -1.16727,5.1529 -1.48477,7.7704 l -0.0328,0.2125 c -0.575,2.8975 -0.81242,5.8524 -1.50742,8.7324 -0.065,0.245 -0.12727,0.4924 -0.18477,0.7449 -3.525,5.9675 -9.93015,9.7277 -13.77265,15.5227 -2.8625,2.7425 -5.2625,5.9447 -7.675,9.0847 -7.27,13.2875 -12.72016,27.4952 -17.33516,41.8977 -0.7525,2.6225 -2.75984,4.5726 -4.51484,6.5551 -3.99,3.1975 -8.36258,5.8271 -12.99258,7.9921 -3.465,1.69 -8.11492,2.3002 -10.21992,5.7477 l 0,0.8426 c 0.15,0.3125 0.31008,0.6223 0.46758,0.9398 0.685,1.6025 1.71258,3.2026 3.25508,4.0926 4.9725,0.22 9.97742,0.1325 14.95742,0.062 3.3875,-0.4 7.86,1.2898 10.525,-1.5227 2.3125,-3.4975 4.89757,-6.8122 7.05507,-10.4097 3.4825,-4.555 6.50743,-9.4799 9.23243,-14.5199 0.985,-1.61 0.61492,-3.5128 0.31992,-5.2653 -1.0025,-7.1075 -2.26985,-14.3322 -1.07735,-21.4972 1.74,-13.69 13.04235,-24.7277 26.20235,-27.8352 1.855,-0.62 3.32484,0.7702 4.82734,1.5852 1.6275,1.9975 3.14024,4.2797 3.29024,6.9347 3.6325,-0.68 6.72492,-3.5551 9.00742,-6.3551 0.9925,-1.065 1.80242,-2.2674 2.44492,-3.5699 1.07,-1.95 2.875,-3.9426 2.9,-6.2176 -4.7875,0.24 -9.80742,-0.4871 -13.66992,-3.5171 -0.655,-0.765 -1.225,-1.5954 -1.9625,-2.2829 -2.6275,-4.465 -2.7625,-9.735 -2.5125,-14.7625 1.0825,-10.4625 5.60258,-20.09 9.45508,-29.7125 0.4825,-0.73 2.77484,-2.3124 2.12734,-0.1824 -1.3125,3.8975 -3.92758,7.3175 -4.63008,11.4375 -0.73,3.26 -1.605,6.5003 -1.9875,9.8278 -0.8425,3.48 -1.34726,7.1746 -1.03476,10.7296 l 0.05,0.45 c 0.13,2.9125 0.55242,6.1979 2.49492,8.4954 5.41,8.0775 17.80008,4.5898 23.53008,-1.4977 5.8325,-4.5375 9.73,-11.0925 12.75,-17.7375 3.085,-5.5075 6.025,-11.1925 8.4625,-17 -2.1325,0.355 -4.15524,1.1924 -6.26524,1.6574 -2.86,0.5275 -5.74742,0.85 -8.64492,1.0625 -5.24,-0.1625 -10.52734,-1.4275 -14.88984,-4.425 -4.765,-3.86 -7.75758,-9.5473 -9.00508,-15.4898 -0.0517,0 -0.10286,0 -0.15313,0 z m 157.48046,24.4441 c -0.055,2.9175 0.0627,5.8374 -0.0773,8.7574 -0.515,14.9625 -2.91484,30.8329 -12.41484,42.9704 -2.5725,2.2875 -0.89516,5.225 1.00234,7.275 11.175,-13.48 15.14734,-32.0877 12.67734,-49.1852 -0.2425,-3.2025 -0.5525,-7.0126 -1.1875,-9.8176 z m -174.1871,49.6438 c -2.64524,-0.038 -5.7082,0.9762 -7.56758,1.8687 l -0.1875,-0.012 c -4.845,1.7275 -8.77523,5.9178 -10.75273,10.5778 -3.11,4.41 -4.89758,10.4147 -5.50508,15.9222 -0.8325,5.5225 -1.89476,12.0302 0.86524,17.1352 6.4575,0.8025 12.23976,-4.0575 16.80976,-7.975 5.13,-3.6775 9.21281,-9.7049 10.73281,-15.9574 1.945,-5.71 1.82469,-12.4026 0.51719,-18.1926 -0.56953,-2.4797 -2.57807,-3.3328 -4.91211,-3.3664 z m 119.66992,20.0687 c -1.7875,3.9025 -2.98507,8.2726 -3.71757,12.5551 -0.6175,1.4225 -0.64,3.1023 -0.6625,4.6398 -1.4125,9.725 -0.55516,20.4 1.12734,29.75 l 0.0527,0.2153 c 0.9725,5.9175 2.38719,11.8997 4.61719,17.4472 1.685,-0.043 3.54258,-1.2073 5.13009,-1.9398 -0.31,-1.5325 -0.51228,-3.3299 -1.29728,-4.6074 -1.1175,-5.01 -2.09765,-10.1074 -3.04765,-15.1199 l 0.0625,-0.2051 c -0.8225,-6.7575 -1.13742,-13.5274 -0.80742,-20.3074 0.0725,-2.825 0.26476,-5.6502 0.75976,-8.4352 3.36001,-4.7 -0.52969,-9.4326 -2.21719,-13.9926 z m 12.26484,18.0125 c -0.79,3.23 -1.89258,6.4775 -1.51758,9.8625 -0.0675,0.9225 -0.0223,1.8475 0.13516,2.775 -1.4875,10.8875 1.04242,22.2501 5.91992,32.0801 0.6175,1.735 2.59742,-0.5598 3.14492,-1.0148 1.3275,-0.1875 3.47,-0.8578 1.825,-2.2153 -2.415,-5.64 -4.51476,-11.9272 -5.53476,-17.6347 -0.55,-6.175 -0.23266,-12.4527 1.16484,-18.5102 0.7875,-3.02 -3.42,-3.6701 -5.1375,-5.3426 z m 13.29492,10.275 c -1.5625,4.6525 -1.625,9.7753 -0.975,14.5778 -0.17,1.2625 0.0927,2.6199 0.49024,3.8324 0.5125,2.735 1.27,6.0397 2.725,8.2722 0.05,0.135 0.14726,0.4027 0.19726,0.5352 0.6925,2.55 2.32992,4.8574 3.81992,6.9699 0.885,2.4325 3.16516,-1.5972 4.39766,-2.2597 -1.4325,-3 -2.77242,-6.1901 -4.18242,-9.2301 -1.785,-5.8225 -3.1075,-11.8978 -2.0625,-18.0153 l 0.0648,-0.2097 c 1.17,-2.63 -2.345,-4.0127 -4.475,-4.4727 z m 14.70782,11.7781 c -0.0627,0 -0.12602,0 -0.19024,0 -2.2825,7.245 0.0501,15.6499 5.46758,20.9274 1.105,-0.5575 2.49226,-1.6847 2.62226,-2.8797 -3.345,-3.95 -5.61968,-8.8927 -5.31718,-14.1777 0.54492,-1.9618 -0.63958,-3.8341 -2.58242,-3.8719 z"
                 inkscape:connector-curvature="0" />
            </g>
          </g>
        </svg>
        `
    },
    "Pisces": {
        "Aries": [68, `<h3>When Aries and Pisces come together in a love match, they can be very good for one another.</h3>
        <p>Aries is a strong Sign; they are almost completely prey to their impulses, which they follow without a second thought to the outcome or possible consequences. Dreamy Pisces is much quieter and more internally-focused; they’re the Poets of the Zodiac. On the surface an Aries and a Pisces may seem an unlikely pair, but when there’s love involved, they can truly fulfill one another’s needs. Pisces is very intuitive, both as a person and as a lover; Aries must take care to return this favor so Pisces won’t begin to see their Aries partner as stingy and selfish.</p>`],
        "Taurus": [84, `<h3>When Taurus and Pisces come together in a love affair, it’s generally a happy union.</h3>
        <p>They are two positions apart within the Zodiac, and such Signs tend to have karmic ties and a deep empathy for one another. While Pisces is idealistic, dreamy and impressionistic, Taurus is more down-to-earth and practical. They’re both nurturers, however, and both prize harmony and stability in a relationship.</p>`],
        "Gemini": [54, `<h3>When Gemini and Pisces come together in a love affair, they can make a very empathetic and mutually satisfying couple.</h3>
        <p>Gemini is cerebral, quick-witted and silver-tongued, and can bring a dash of humor and intellectual direction to help focus Pisces’s dreamy view of the world. Pisces has the gift of intuitive empathy; they connect very well with others on a rather subtle emotional level, and their dreamy nature makes them quite open-minded — in short, Pisces expects the unexpected. Gemini is open-minded as well; mentally both agile and flexible, the Twins are gifted at seeing all sides of an issue and at communicating with other people. This relationship is all about flexibility and connection.</p>`],
        "Cancer": [99, `<h3>A love match between a Cancer and a Pisces is a positive meeting of spirits.</h3>
        <p>Both signs are basically tolerant and sympathetic, and Pisces is easily energized by Cancer’s ideas. A Pisces mate can open a Cancer’s eyes to the world of creativity and spirituality. In turn, Cancer’s practicality can be a guide, leading Pisces to the fruition of their dreamy, utopian ideas. This celestial pairing benefits from an amazingly strong and multifaceted emotional bond.</p>`],
        "Leo": [37, `<h3>When Leo and Pisces join together in a love match, each partner enjoys the new perspective the other brings to life in general.</h3>
        <p>Leo is a strong and assertive Sign, being free to do what they want and taking command of their surroundings. Pisces is quieter and more reserved and introspective. In many ways the two are polar opposites, yet both are dreamers at heart. When they care for one another, they each fill the other’s voids and have a caring, mutually beneficial relationship.</p>`],
        "Virgo": [88, `<h3>When Virgo and Pisces join together in a love match, it generally makes for a healthy relationship.</h3>
        <p>The two Signs are opposite one another within the Zodiac, and such Signs tend to be well balanced, one making up for qualities the other lacks. They are an easy-going, do-gooding duo, and often devote their time to helping others as well as one another. Each partner in this couple brings out the best aspects in the other.</p>`],
        "Libra": [88, `<h3>When Libra and Pisces come together in a love affair, theirs is a congenial and even-tempered romance.</h3>
        <p>These two Signs are very compatible, making for a truly smooth-sailing love affair. Both Signs are attuned to life’s aesthetic side, but they also have much to offer one another: When Pisces gets lost in a fantasy, Libra can apply that Libran proclivity for balance to help get Pisces back on track, and Pisces can return the favor by helping Libra see the beauty in love and empathy. This is an honest partnership that values truth and harmony in itself and in the world.</p>`],
        "Scorpio": [97, `<h3>When Scorpio and Pisces make a love match, theirs is a splendid union of much respect and understanding.</h3>
        <p>These mates share the same Element — Water — and thus have keen insight into one another’s minds and hearts. Scorpio is very profound and covert, often caught up in their own secret plans, while Pisces is idealistic and looks for the nuances of a situation. However, Pisces also has a tendency to withdraw into their own mind, and can forgive Scorpio for being mysterious or withdrawn at times.</p>`],
        "Sagittarius": [63, `<h3>When Sagittarius and Pisces join together in a love match, a relationship of realized dreams is formed.</h3>
        <p>Sagittarius is more of a thinker and philosophizer, easily drifting around from one pursuit to the next. Pisces is more inward, involved in the shifting of their own mindscape. They are opposites in some respects, and to outsiders may seem an unlikely pair. But as their love for one another grows, they are more likely to be able to satisfy the philosophical cravings of the other and maintain a healthy relationship.</p>`],
        "Capricorn": [88, `<h3>When Capricorn and Pisces join together in a love match, on the surface, it may appear to be opposites attracting.</h3>
        <p>Capricorn is down-to-earth and regimented, with a very strong work ethic, while Pisces tends to be more emotional and dreamy, and takes on the needs of those around them. This couple is honest, and can be devoted to one another. They admire one another: Capricorn appreciates Pisces’s kind nature, and Pisces is drawn in by Capricorn’s quick wit and tenacity.</p>`],
        "Aquarius": [45, `<h3>When Aquarius and Pisces join together in a love match, there is much compassion and creation.</h3>
        <p>These partners are idealistic as individuals as well as they are together. Pisces flows with their dream-like surroundings, and Aquarius is constantly coming up with new inventions and ways of doing things. This relationship digs deep for the truth of the matter at hand, and both partners are always looking for solutions to problems. They both tend to be introspective. Aquarius can often be quick to judge those who don’t share their vision, while Pisces is often too compassionate, even for those who don’t necessarily deserve it.</p>`],
        "Pisces": [60, `<h3>When two Pisceans join together in a love match, there is a union of two sensitive and emotional people.</h3>
        <p>They share honest, efficient communication, a rich emotional bond and a deep spiritual connection. They both feel that their precious relationship is the most wonderful thing in the world, and it couldn’t get any better. They share a love of beauty and peace unparalleled in the Zodiac, and both are equally committed to maintaining this ideal relationship.</p>`],
        "svg": `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
        <!-- Created with Inkscape (http://www.inkscape.org/) -->
        
        <svg
           xmlns:dc="http://purl.org/dc/elements/1.1/"
           xmlns:cc="http://creativecommons.org/ns#"
           xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
           xmlns:svg="http://www.w3.org/2000/svg"
           xmlns="http://www.w3.org/2000/svg"
           xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
           xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
           width="50.86133mm"
           height="50.86133mm"
           viewBox="0 0 718.79998 718.79998"
           id="svg2"
           version="1.1"
           inkscape:version="0.91 r13725"
           sodipodi:docname="PiscesDrawing6.svg">
          <defs
             id="defs4">
            <filter
               inkscape:label="Modified combined Lighting"
               inkscape:menu="Bevels"
               inkscape:menu-tooltip="Basic specular bevel to use for building textures"
               style="color-interpolation-filters:sRGB"
               id="filter125483"
               height="1.04"
               width="1.04"
               y="-0.02"
               x="-0.02">
              <feGaussianBlur
                 stdDeviation="6"
                 in="SourceGraphic"
                 result="result0"
                 id="feGaussianBlur125485" />
              <feDiffuseLighting
                 lighting-color="#ffffff"
                 diffuseConstant="1"
                 surfaceScale="4"
                 result="result5"
                 id="feDiffuseLighting125487">
                <feDistantLight
                   elevation="45"
                   azimuth="235"
                   id="feDistantLight125489" />
              </feDiffuseLighting>
              <feComposite
                 k1="1.4"
                 in2="SourceGraphic"
                 in="result5"
                 result="fbSourceGraphic"
                 operator="arithmetic"
                 id="feComposite125491"
                 k2="0"
                 k3="0"
                 k4="0" />
              <feGaussianBlur
                 result="result0"
                 in="fbSourceGraphic"
                 stdDeviation="6"
                 id="feGaussianBlur125493" />
              <feSpecularLighting
                 specularExponent="25"
                 specularConstant="1"
                 surfaceScale="4"
                 lighting-color="#ffffff"
                 result="result1"
                 in="result0"
                 id="feSpecularLighting125495">
                <feDistantLight
                   azimuth="235"
                   elevation="45"
                   id="feDistantLight125497" />
              </feSpecularLighting>
              <feComposite
                 k3="1"
                 k2="1"
                 operator="arithmetic"
                 in="fbSourceGraphic"
                 in2="result1"
                 result="result4"
                 id="feComposite125499"
                 k1="0"
                 k4="0" />
              <feComposite
                 operator="in"
                 result="fbSourceGraphic"
                 in2="SourceGraphic"
                 in="result4"
                 id="feComposite125501" />
              <feColorMatrix
                 result="fbSourceGraphicAlpha"
                 in="fbSourceGraphic"
                 values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
                 id="feColorMatrix125639" />
              <feGaussianBlur
                 id="feGaussianBlur125641"
                 stdDeviation="1.1000000000000001 1.1299999999999999"
                 result="blur"
                 in="fbSourceGraphic" />
              <feColorMatrix
                 id="feColorMatrix125643"
                 values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 50 0 "
                 result="colormatrix" />
              <feComposite
                 id="feComposite125645"
                 in2="fbSourceGraphic"
                 in="colormatrix"
                 operator="in" />
            </filter>
            <filter
               inkscape:collect="always"
               style="color-interpolation-filters:sRGB"
               id="filter126637"
               x="-0.099000007"
               width="1.198"
               y="-0.099000007"
               height="1.198">
              <feGaussianBlur
                 inkscape:collect="always"
                 stdDeviation="2.4750002"
                 id="feGaussianBlur126639" />
            </filter>
          </defs>
          <sodipodi:namedview
             id="base"
             pagecolor="#ffffff"
             bordercolor="#666666"
             borderopacity="1.0"
             inkscape:pageopacity="0.0"
             inkscape:pageshadow="2"
             inkscape:zoom="0.73734003"
             inkscape:cx="359.39999"
             inkscape:cy="359.39999"
             inkscape:document-units="px"
             inkscape:current-layer="layer1"
             showgrid="false"
             inkscape:window-width="1366"
             inkscape:window-height="705"
             inkscape:window-x="-8"
             inkscape:window-y="-8"
             inkscape:window-maximized="1"
             fit-margin-top="0"
             fit-margin-left="0"
             fit-margin-right="0"
             fit-margin-bottom="0" />
          <metadata
             id="metadata7">
            <rdf:RDF>
              <cc:Work
                 rdf:about="">
                <dc:format>image/svg+xml</dc:format>
                <dc:type
                   rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
                <dc:title />
              </cc:Work>
            </rdf:RDF>
          </metadata>
          <g
             inkscape:label="Layer 1"
             inkscape:groupmode="layer"
             id="layer1"
             transform="translate(729.21106,-1269.0086)">
            <g
               id="g91385">
              <circle
                 transform="matrix(10,0,0,10,-3421.7007,-4530.6759)"
                 id="circle124376-7"
                 r="30"
                 cy="615.90845"
                 cx="305.18896"
                 style="fill:#000000;fill-opacity:1;stroke:none;stroke-opacity:1;filter:url(#filter126637)" />
              <circle
                 transform="matrix(10,0,0,10,-3421.7007,-4530.6759)"
                 id="circle124376"
                 r="30"
                 cy="613.90845"
                 cx="303.189"
                 style="fill:#bb2faa;fill-opacity:1;stroke:none;stroke-opacity:1;filter:url(#filter125483)" />
              <path
                 style="opacity:0.7;fill:#000000"
                 id="path4"
                 d="m -366.92657,1446.4363 c -1.36499,1.945 -2.92218,3.7449 -4.27968,5.6949 -1.23,1.45 -2.46508,2.9 -3.49258,4.5 -5.9375,7.985 -12.20008,15.7077 -19.85508,22.1352 -3.8575,3.4525 -8.31984,6.0698 -12.61484,8.8973 -0.525,0.225 -1.04266,0.4627 -1.54766,0.7277 -2.49,1.3475 -5.13757,2.3373 -7.69257,3.5348 -3.29,1.0375 -6.5775,2.085 -9.975,2.7375 -3.4275,0.71 -6.915,0.9175 -10.3875,1.225 -2.6325,0.115 -5.2975,0 -7.9,0.4828 -5.3925,0.3875 -10.78735,1.1823 -16.02735,2.5148 -16.83249,3.3025 -33.11249,10.3049 -46.01249,21.7774 -4.8475,4.095 -9.60274,8.4275 -13.49024,13.4675 -1.935,2.265 -3.91742,4.6028 -5.21992,7.3028 -3.345,5.4175 -5.47,11.5897 -6.9125,17.7722 l -0.0523,0.1825 c -1.985,6.2075 -2.64023,12.7975 -3.06523,19.2801 -0.2225,2.8125 -0.47227,5.7126 0.0402,8.5101 0.07,5.87 0.62742,11.7773 1.96992,17.4973 0.57,4.11 1.65234,8.1502 2.97734,12.0777 5.62,18.515 17.0625,35.3076 32.575,46.9301 13.97,10.1125 29.60774,18.5299 46.69023,21.7949 -2.4575,-3.28 -4.82515,-6.645 -7.41015,-9.825 -2.865,-4.26 -5.47242,-8.7151 -8.29492,-12.9801 -4.2375,-8.3425 -8.52485,-17.0574 -9.17735,-26.5574 -0.6525,-6.855 0.25227,-14.2574 4.40977,-19.9574 1.3075,-1.2025 2.64773,-2.3703 4.05273,-3.4578 8.1075,-4.07 17.42742,-1.7598 25.98242,-0.7223 -1.685,-1.8275 -3.69523,-3.3375 -5.52773,-5.0125 -0.87,-1.0525 -1.74992,-2.135 -2.95742,-2.8125 -1.3075,-1.7525 -2.90235,-3.2551 -4.50235,-4.7351 -0.565,-0.8375 -1.26273,-1.5749 -2.01523,-2.2399 -3.2275,-3.8325 -6.0875,-7.9477 -8.9875,-12.0152 -3.1275,-5.7925 -5.94719,-11.8847 -6.69219,-18.5047 -0.3425,-3.5825 -0.145,-7.1878 0.4375,-10.7328 1.6375,-7.2825 5.61,-13.8622 10.925,-19.0547 9.195,-8.75 21.015,-13.8401 32.725,-18.2676 5.6225,-1.86 11.36227,-3.2977 17.13477,-4.6027 2.7275,-0.4375 5.46257,-0.8373 8.18007,-1.3348 5.3575,-0.5025 10.73243,-0.92 16.05743,-1.6875 l 0.21523,-0.028 c 2.8,-0.295 5.62242,-0.2524 8.41992,0.085 5.4775,0.46 10.9325,1.1676 16.4125,1.5926 1.0725,0.1975 2.16492,0.3176 3.25742,0.3051 3.565,0.5425 7.15734,0.8522 10.73984,1.2597 9.2325,0.895 18.39024,2.4228 27.42774,4.5153 1.1125,0.1325 2.565,0.9997 3.5125,-0.028 -4.3725,-5.485 -10.635,-10.2575 -17.9,-10.6125 -3.485,-0.49 -6.98008,1.1101 -10.40508,0.6551 1.01,-2.1725 4.17742,-1.8424 5.98242,-3.0449 2.555,-0.29 2.23274,-3.955 0.12774,-4.6125 -4.715,-1.5675 -9.59282,0.2898 -14.27032,1.0723 -0.535,0.01 -1.49468,-0.6198 -1.21718,-1.1098 2.5875,-1.05 5.30476,-1.8426 7.84726,-3.0176 0.1475,-3.26 -1.835,-6.9051 -5.1875,-7.6226 -3.665,-0.88 -6.81976,1.7026 -10.25976,2.4601 -0.435,0.015 -1.29,-0.1724 -0.825,-0.7324 2.21,-1.9175 5.29976,-2.5702 7.33476,-4.7527 2.03,-2.7975 -0.005,-7.61 -3.75,-7.17 -3.5225,0.4925 -6.66226,2.615 -10.23476,2.995 -0.7225,0.082 -0.78773,-0.885 -0.75273,-1.4075 2.9925,-1.54 6.53991,-1.9074 9.20741,-4.0949 2.815,-1.77 1.6175,-7.3448 -1.95,-7.1523 -3.7825,0.565 -6.87741,3.115 -10.01991,5.125 -2.3975,-2.9675 3.54492,-4.2726 5.00742,-6.4676 1.75749,-0.9675 3.31281,-2.4774 3.82031,-4.4699 0.9575,-4.4175 0.3925,-9.2101 -0.35,-13.6676 0.0775,-1.7025 -0.0176,-4.1101 -2.04258,-4.6176 l -0.21524,0 z m -61.4914,77.1848 c -1.11781,-0.01 -2.24578,0.2965 -3.20078,0.8652 -4.54,2.41 -9.50023,4.5774 -12.77773,8.7074 -0.6425,0.97 -1.43727,3.0925 0.003,3.7375 1.235,1.5225 3.79992,0.7651 5.49492,0.5426 5.84,1.24 11.60508,3.29 17.58008,3.7 4.5725,-1.125 1.35718,-6.2476 -1.04532,-7.9976 -2.21,-2.375 -1.83734,-5.7225 -2.91484,-8.5625 -0.91375,-0.67 -2.02125,-0.9861 -3.13906,-0.9926 z m 81.04452,4.4926 c -10.73078,-0.02 -21.72366,2.1144 -31.77303,5.5925 -4.045,0.995 -7.94508,2.6178 -11.79258,4.2028 1.07,1.3625 2.44531,2.4722 3.84531,3.4797 2.8375,3.19 5.9375,6.2778 8.9875,9.2703 2.655,3.64 5.56242,7.1874 7.95742,11.0324 1.67,3.82 3.80476,7.605 3.98476,11.8875 -1.80749,1.3475 -4.67249,1.1926 -6.44999,2.1426 -4.835,0.67 -9.70719,0.9725 -14.57969,1.1875 -0.5825,-0.085 -1.71,-0.2602 -1.2125,0.5348 3.215,6.175 9.44,10.1324 15.4125,13.3199 0.6625,0.275 1.25734,0.9625 2.01484,0.85 3.2225,1.825 6.77266,3.4201 10.38516,4.2851 4.7475,2.0875 10.41242,3.3549 15.75742,2.9899 5.3875,-1.775 10.61492,-4.7824 14.41992,-8.9824 0.3275,-0.1675 0.72516,-0.35 0.72266,-0.7875 2.2025,-1.4525 3.79742,-4.0524 5.09492,-6.3649 1.565,-2.6075 2.81758,-5.5551 3.19258,-8.5926 1.81,-6.5675 0.48734,-14.8801 -2.03516,-21.4426 -1.0475,-3.705 -2.62742,-7.3523 -4.69492,-10.5898 -3.3,-5.595 -6.75492,-14.6702 -14.65742,-13.8727 -1.51876,-0.093 -3.04672,-0.1397 -4.5797,-0.1425 z m 25.25744,3.4672 c -0.63524,0.032 0.796,1.4022 1.0621,1.8105 8.5575,9.8425 14.93258,21.4148 20.14258,33.3148 4.665,11.3326 7.32242,26.3601 -1.71758,36.2426 -8.1625,6.68 -18.80984,3.1352 -28.16484,2.2102 1.815,2.425 4.49234,4.6898 6.92734,6.7473 0.57,0.7475 1.13766,1.5452 1.96016,2.0402 0.805,1.25 1.85,2.3125 3.0125,3.2375 8.1775,8.7425 16.24492,18.6775 18.11992,30.875 2.22,10.405 -1.09024,21.6523 -8.44024,29.3023 -3.985,4.7925 -9.22718,8.2651 -14.41718,11.6051 -6.365,3.5925 -13.00274,6.6825 -19.74024,9.4625 -8.4325,2.795 -17.11234,4.7623 -25.90234,6.0223 -8.215,0.385 -16.34765,2.1051 -24.58515,1.9551 -6.7625,-0.5575 -13.5075,-1.3249 -20.2625,-1.9649 -6.755,-0.91 -13.52485,-1.7074 -20.28985,-2.5324 -6.8725,-1.03 -13.8425,-1.9351 -20.425,-4.2176 -2.5625,1.185 1.42977,4.3049 2.65977,5.0399 4.1875,3.2625 9.22273,5.9375 14.62773,6.175 0.605,0.027 1.21485,0.04 1.82735,0.035 2.535,0.395 6.3625,-1.9649 8.0875,0.018 -1.575,2.3675 -6.85008,1.0172 -7.99258,4.2547 0.4425,1.8875 2.57008,2.6401 4.18008,3.3051 2.9975,1.05 6.07015,-0.75 9.07265,-1.025 1.3975,-0.2 3.00977,-0.9351 4.29727,-0.055 -2.1825,1.66 -5.27227,2.0252 -7.79727,3.1602 -0.025,3.975 3.88758,9.3748 8.28008,7.9398 2.7725,-0.3575 5.5125,-2.8499 8.2625,-1.8449 -1.395,2.4 -4.90516,2.3052 -6.96016,4.0652 -2.7925,1.7175 -2.13992,6.3974 0.61758,7.8074 3.9775,1.095 7.74008,-1.4499 11.46758,-2.4824 1.145,-0.575 2.01984,0.1874 1.40234,1.3824 -3.1775,1.65 -6.55257,2.94 -9.73007,4.575 -1.75,2.535 0.41515,6.0626 2.91015,7.1051 3.4925,-1.565 6.70977,-3.85 10.23477,-5.425 1.2,1.2625 -0.22492,2.4222 -1.26992,3.2047 -4.3275,3.04 -9.20508,7.5078 -7.94258,13.4328 -0.002,4.155 0.92281,8.2324 1.52031,12.3274 l 1.8125,0 c 2.5625,-2.755 4.29727,-6.1476 6.35977,-9.2676 10.8375,-13.3825 22.46007,-27.245 38.53007,-34.45 6.48,-2.41 13.33766,-3.4499 20.08516,-4.7899 11.85,-1.465 23.94742,-1.6702 35.44492,-5.2027 18.245,-5.11 36.01508,-14.205 48.45508,-28.7875 6.59,-7.085 11.68468,-15.7372 14.52968,-25.0047 4.8825,-14.08 5.37008,-29.48 3.50508,-44.1625 -1.1025,-10.0225 -3.66226,-19.9977 -7.98476,-29.1277 -4.0375,-9.315 -9.83016,-17.8799 -16.78516,-25.2649 -15.4025,-16.5625 -35.98484,-28.3327 -58.17734,-32.8277 -0.40642,-0.1636 -0.66318,-0.2276 -0.80976,-0.2203 z m -23.59766,4.8437 c 5.02604,-0.09 6.9871,7.8617 2.8246,10.5242 -2.895,1.2025 -7.3675,1.0727 -8.8,-2.2273 -1.7325,-3.565 1.32258,-7.6101 4.93008,-8.1676 0.3614,-0.081 0.71024,-0.1233 1.04532,-0.1293 z m 25.30976,10.5418 c 2.5,5.6875 4.47992,12.0723 5.53242,17.8648 l 0.0301,0.2227 c 0.3525,4.1375 0.25984,8.3073 -0.0102,12.4473 -0.805,4.0425 -2.33742,7.9351 -4.50742,11.4601 -1.905,1.71 -3.51976,3.825 -5.52226,5.4825 -4.3925,2.69 -9.24024,4.7099 -14.34024,5.6449 -0.955,0.1375 0.13758,0.8201 0.58008,0.8601 4.485,2.98 10.66492,2.2524 15.85742,1.8399 8.5675,-0.5625 17.98508,-5.6548 19.43008,-14.8348 2.1125,-7.9425 -1.28984,-16.1127 -5.02734,-23.0227 -3.22,-6.3675 -6.07766,-13.6523 -12.02266,-17.9648 z m -218.75898,9.727 c -0.12281,0 -0.24554,0.012 -0.36367,0.048 -4.405,4.02 -8.685,8.4148 -14.1625,10.9723 3.495,1.68 7.07758,3.4078 10.74258,4.6828 1.8025,-4.56 3.2075,-9.2751 4.8875,-13.8801 0.62344,-0.9078 -0.24418,-1.8041 -1.10391,-1.823 z m 283.39804,3.1472 c -0.47484,-2e-4 -0.73718,0.702 0.0859,1.1258 0.14,0.1875 0.31492,0.3523 0.51992,0.4898 1.095,1.9375 2.4825,3.9025 4.075,5.42 0.99,1.6325 2.00016,3.5627 3.49766,4.7777 1.54,3.51 4.3975,6.5998 8.7375,4.9723 1.96,0.18 3.93976,0.07 5.90976,-0.012 3.65,0.215 7.31774,-0.038 10.97774,0.1375 -0.4412,-0.7051 -1.70766,-1.1182 -2.65312,-1.6731 0,0 0,0 0,0 -0.0132,-0.015 -0.0247,-0.029 -0.0391,-0.044 -0.1221,-0.1221 -0.28954,-0.2363 -0.51016,-0.3332 -1.095,-1.07 -2.15468,-2.1798 -3.20468,-3.2848 -1.7725,-3.205 -3.07532,-6.7474 -3.10782,-10.4574 -0.99,-0.023 -1.975,-0.02 -2.95,0 -0.36,-0.01 -0.71718,0 -1.06718,-0.035 -4.2575,-0.5 -8.765,-0.3925 -13.1125,-0.55 -2.0725,-0.475 -4.53282,-0.2151 -6.64532,-0.2676 -0.17312,-0.1925 -0.355,-0.2706 -0.51328,-0.2707 z m -296.27616,12.8141 c -0.33032,-0.01 -0.60008,0.059 -0.77774,0.2215 -0.99,2.83 -2.61507,5.3578 -4.30507,7.8203 -1.6525,1.52 -3.02258,3.3298 -4.76758,4.7648 0.9475,1.005 2.7275,1.1799 4.0625,1.4149 3.33,1.63 7.51265,2.6277 11.17265,3.8277 1.215,0.66 2.6075,1.2001 4,1.2051 0.02,-5.365 0.0448,-10.7303 -0.0102,-16.0953 -1.4325,-0.415 -2.7625,-1.2624 -4.275,-1.3399 -1.10296,-0.4529 -3.66821,-1.7956 -5.09961,-1.8191 z m 310.46718,7.2293 c 0.1675,0.96 0.52226,2.0448 1.17226,2.8148 1.0475,3.305 2.245,6.6 3.55,9.8075 0.445,2.4075 1.41524,4.7574 2.04024,7.1449 6.85,0 14.46258,0.1878 20.84258,-0.092 -4.8525,-5.4425 -3.83266,-13.6376 -0.22266,-19.4426 -8.625,-0.46 -18.34242,0.01 -27.38242,-0.2324 z m -197.32422,1.7914 c -0.5505,-0.01 -1.10351,0.1217 -1.57851,0.4086 -3.6975,2 -7.25985,4.3324 -10.43985,7.0824 -1.3975,0.67 -2.66242,1.6724 -3.74492,2.7699 1.985,2.1675 4.05985,4.3202 6.31485,6.2102 1.715,2.3125 4.285,3.8775 6.1125,6.125 0.9975,1.3625 0.78023,-1.5227 0.91523,-1.7727 -0.0775,-6.335 3.235,-11.8125 5.1375,-17.6425 0.56438,-1.9069 -1.06527,-3.1584 -2.7168,-3.1809 z m -120.96601,8.3109 c -0.355,2.0275 -0.0399,4.12 -0.0824,6.17 0.685,6.69 -3.34492,12.3699 -7.44492,17.1824 l 0,0.2375 c 9.2275,-0.3175 18.47008,-0.067 27.70508,-0.1199 -0.0125,-1.135 -0.305,-2.235 -0.625,-3.3075 l -0.0699,-0.2074 c -0.8875,-4.6925 -1.56266,-9.4226 -2.32266,-14.1351 -1.255,-0.6225 -2.61508,-0.9925 -3.95508,-1.375 -4.415,-1.44 -8.74258,-3.1575 -13.20508,-4.445 z m 353.97265,13.6024 c -9.155,0.245 -18.31766,0 -27.47266,0.1125 0.67,6.0225 1.43,12.0727 2.3875,18.0527 1.9875,0.6525 3.98782,1.3476 6.05782,1.7051 3.465,1.365 7.10726,2.28 10.69726,3.275 0.4475,0.2025 0.92,0.3573 1.4125,0.4398 -0.055,-3.465 -0.20758,-6.9325 -0.0176,-10.3925 0.7775,-4.955 4.22766,-8.92 6.93516,-12.9575 l 0,-0.2351 z m -125.28008,8.9277 c 0.43,5.2525 -1.82726,10.0974 -3.18476,14.9949 -1.0425,1.465 -1.55508,3.9075 -2.53008,5.645 1.61,4.365 6.78992,1.27 9.01992,-0.9375 0.285,-0.1075 0.57992,-0.235 0.74492,-0.5075 3.25,-1.6875 6.12016,-4.0575 9.19766,-6.05 -3.09,-3.335 -6.37258,-6.6151 -9.74258,-9.6976 -0.0625,-0.062 -0.18516,-0.1874 -0.24766,-0.2524 -0.9125,-1.2125 -1.98742,-2.3824 -3.25742,-3.1949 z m -113.11171,1.4102 c -1.48105,-0.01 -2.97571,0.1125 -4.35821,0.3148 -0.105,0.01 -0.31765,0.035 -0.42265,0.047 -4.4875,0.375 -9.17992,1.6226 -12.86992,4.1926 -1.6225,0.37 -2.93,1.9449 -3.975,3.1824 -5.4425,5.2675 -4.41258,14.12 -2.46758,20.5125 0.7425,3.695 1.97508,7.4451 3.73008,10.7601 1.115,2.8225 2.69758,5.6526 4.56757,7.9301 0.955,2.0975 2.51766,4.0073 4.21016,5.5473 0.7675,1.49 2.19242,2.7577 3.50742,3.7027 -2.0075,-5.2475 -3.86523,-10.9626 -5.06523,-16.1351 -1.28,-8.3025 -0.9575,-17.2675 3.45,-24.62 3.44,-4.1075 7.72515,-7.7749 12.91015,-9.5949 2.5225,-1.335 5.70235,-1.24 7.95235,-3.0625 -0.8675,-0.6875 -1.94492,-1.0125 -2.98242,-1.3375 -0.7725,-0.5775 -1.88993,-0.5124 -2.80743,-0.6824 -1.59328,-0.5273 -3.47509,-0.7478 -5.37929,-0.7574 z m -114.82305,3.4324 c 4.4375,5.8325 3.82477,13.9074 -0.0152,19.8574 9.235,-0.037 18.47008,-0.07 27.70508,0.018 -2.75,-6.41 -5.30242,-12.9875 -7.04492,-19.775 -6.8775,-0.1075 -13.76492,0.09 -20.64492,-0.1 z m 133.93359,0.8344 c -4.32019,-0.056 -8.62023,1.2084 -11.69882,4.5156 -1.815,0.995 -3.46758,2.3823 -4.74258,4.0098 -1.325,0.545 -2.37977,1.7327 -3.02227,2.9777 -6.5125,5.465 -7.5725,14.7423 -7.1875,22.6773 0.01,3.86 0.70242,8.03 1.95742,11.525 2.14,7.69 6.4275,15.1051 12.0125,20.7426 2.105,5.955 9.11508,4.8801 14.06758,4.2551 0.355,0 0.73508,0.1124 1.08008,-0.018 6.5075,-0.16 13.09992,-1.0524 19.38242,-2.7574 7.43,-1.555 14.69,-4.0028 21.6875,-6.9403 -3.1225,-2.9025 -6.11742,-6.2175 -9.33242,-8.955 -2.17,-3.045 -5.03531,-6.0074 -7.45781,-8.7274 -3.22,-5.0775 -6.80469,-10.2651 -7.99219,-16.3301 0.19,-0.655 -0.41516,-1.7872 0.46484,-1.9972 6.88,-2.4275 14.25735,-2.8675 21.48985,-2.95 -0.0425,-1.145 -0.97977,-2.1901 -1.68477,-3.0301 -3.08,-4.305 -7.73023,-7.5726 -12.55273,-9.7051 -2.8975,-1.91 -6.43735,-3.4026 -9.77735,-4.5101 -2.1225,-1.4425 -5.35234,-2.3372 -7.97734,-3.0047 l -0.20508,-0.04 c -2.58984,-1.043 -5.5554,-1.6995 -8.51133,-1.7378 z m 194.75977,7.0183 c -0.0742,0 -0.1486,0 -0.22344,0.01 -0.0225,5.3675 0.005,10.7351 -0.02,16.1051 0.6175,0.36 1.32468,0.535 2.02968,0.6375 0.33,0.4375 0.97258,0.3274 1.45508,0.4699 1.91,0.57 5.215,3.0825 6.575,1.8625 1.2925,-3.5849 3.88274,-6.4173 6.19024,-9.3648 1.3075,-1.075 5.11976,-3.9126 1.55976,-4.0352 -4.715,-1.7625 -9.60992,-3.2099 -14.39492,-4.6875 -1.01484,-0.4125 -2.05832,-0.9898 -3.17148,-0.9945 z m -299.74687,15.1285 c -0.20949,0.01 -0.39164,0.039 -0.49414,0.079 -6.6325,0.16 -13.58508,-0.2301 -20.01758,0.1824 3.0475,1.9825 5.31508,4.8552 7.30508,7.8277 0.2225,0.9475 0.525,1.8798 1.025,2.7223 0.5125,1.8375 0.27008,3.995 0.80508,5.6875 l 0.21757,-0.042 c 0.94,-0.047 2.08993,0.4423 2.90743,-0.1027 7.04,0.21 14.71992,0.015 21.49492,-0.1973 -2.2125,-2.67 -4.70235,-5.5577 -6.96485,-8.3227 -1.495,-2.4325 -3.17031,-4.8825 -5.05781,-6.9875 0.28313,-0.705 -0.59222,-0.8727 -1.2207,-0.8461 z m 299.78827,4.6512 c -1.6075,4.3025 -3.24226,8.5974 -4.88476,12.8899 -0.4,1.2825 -0.51274,3.8799 1.55976,2.5324 4.6975,-3.8125 9.25758,-7.8647 14.08008,-11.4797 -3.73,-0.88 -7.17758,-2.6226 -10.75508,-3.9426 z m -196.0164,24.402 c 1.71232,-0.01 3.44844,0.5091 4.69883,1.573 1.64,2.355 1.75508,5.6501 0.13008,8.0426 -3.49,3.44 -10.965,1.5599 -10.825,-3.8801 -0.45446,-3.7685 2.72712,-5.7164 5.99609,-5.7355 z m 75.71094,6.6687 c -0.6506,0.014 -1.29884,0.1242 -1.94454,0.3668 -2.7625,1.3225 -1.18992,5.8351 1.25508,6.7426 0.075,0.05 0.21992,0.15 0.29492,0.2 2.8925,2.1425 1.8525,6.6598 4,9.0023 3.35,3.5775 8.79016,-1.675 12.19766,-3.1675 3.0625,-1.3375 9.66258,-5.6899 5.94258,-9.4399 -3.2125,-0.9425 -7.39024,0.4524 -11.01524,-1.0301 -3.63446,0 -7.21726,-2.7475 -10.73046,-2.6742 z"
                 inkscape:connector-curvature="0" />
            </g>
          </g>
        </svg>
        `
    }
}


calculate = () => {
    var zodiac1_value = zodiac1.value;
    var zodiac2_value = zodiac2.value;
    document.querySelector('.love-info').style.display = "flex"
    document.querySelector('#recheckper').style.display = 'flex'
    document.querySelector('.background').style.opacity = "0";
    document.querySelector('.tag-line').style.display = "none";
    document.querySelector('.user-info').style.display = "none";
    document.querySelector('.my-chart').style.display = 'block'
    document.querySelector('.my-chart').innerHTML = '<canvas id="loveper"></canvas>'
    const lovechart = document.getElementById('loveper').getContext('2d');
    const myChart = new Chart(lovechart, {
        type: 'doughnut',
        data: {
            datasets: [{
                label: 'Love Meter',
                data: [zodiac_comp[zodiac1_value][zodiac2_value][0], 100-(zodiac_comp[zodiac1_value][zodiac2_value][0])],
                backgroundColor: [
                    'rgb(255,44,100)','rgb(255, 255, 255)',
                  ],
                  hoverOffset: 10
              }]
            },
        options: {
            responsive: true,
            maintainAspectRatio: false
            },
        });
    document.querySelector('.love-percentage').innerHTML = `Your Zodiac Compatiblity with ${name2.value} is ${zodiac_comp[zodiac1_value][zodiac2_value][0]}%` 
    document.querySelector('.love-info').innerHTML = `<div class="z1svg"><span>${name1.value}</span>${zodiac_comp[zodiac1_value]['svg']}<span>${zodiac1_value}</span></div><div class="z2svg"><span>${name2.value}</span>${zodiac_comp[zodiac2_value]['svg']}<span>${zodiac2_value}</span></div><div class="zodiac-info">${zodiac_comp[zodiac1_value][zodiac2_value][1]}`
    document.querySelector('.share').innerHTML = `<a href="https://wa.me/?text=Hi ${name2.value}(${zodiac2_value}) your Zodiac Compatiblity results with ${name1.value}(${zodiac1_value}) is ${zodiac_comp[zodiac1_value][zodiac2_value][0]}%. You can check it on https://vishaljoshi789.github.io/LoveCalculator/ZodiacLoveCalculator/index.html" target='_blank'>Share : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill='rgb(62,189,78)' d="M12.036 5.339c-3.635 0-6.591 2.956-6.593 6.589-.001 1.483.434 2.594 1.164 3.756l-.666 2.432 2.494-.654c1.117.663 2.184 1.061 3.595 1.061 3.632 0 6.591-2.956 6.592-6.59.003-3.641-2.942-6.593-6.586-6.594zm3.876 9.423c-.165.463-.957.885-1.337.942-.341.051-.773.072-1.248-.078-.288-.091-.657-.213-1.129-.417-1.987-.858-3.285-2.859-3.384-2.991-.099-.132-.809-1.074-.809-2.049 0-.975.512-1.454.693-1.653.182-.2.396-.25.528-.25l.38.007c.122.006.285-.046.446.34.165.397.561 1.372.611 1.471.049.099.083.215.016.347-.066.132-.099.215-.198.33l-.297.347c-.099.099-.202.206-.087.404.116.198.513.847 1.102 1.372.757.675 1.395.884 1.593.983.198.099.314.083.429-.05.116-.132.495-.578.627-.777s.264-.165.446-.099 1.156.545 1.354.645c.198.099.33.149.38.231.049.085.049.482-.116.945zm3.088-14.762h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-6.967 19.862c-1.327 0-2.634-.333-3.792-.965l-4.203 1.103 1.125-4.108c-.694-1.202-1.059-2.566-1.058-3.964.002-4.372 3.558-7.928 7.928-7.928 2.121.001 4.112.827 5.609 2.325s2.321 3.491 2.32 5.609c-.002 4.372-3.559 7.928-7.929 7.928z"/></svg></a>`

}

recalculate = ()=>{
   document.querySelector('.share').innerHTML = ``
   document.querySelector('.love-info').style.display = "none"
   document.querySelector('.tag-line').style.display = "block";
   document.querySelector('.background').style.opacity = '0.7'
   document.querySelector('.love-percentage').innerHTML = ``
   document.querySelector('.my-chart').style.display = 'none'
   document.querySelector('#recheckper').style.display = 'none'
   document.querySelector('.user-info').style.display = `block`
}

