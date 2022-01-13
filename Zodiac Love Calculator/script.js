var name1 = document.getElementsByName("name1")[0];
var name2 = document.getElementsByName("name2")[0];
var zodiac1 = document.getElementsByName("zodiac1")[0];
var zodiac2 = document.getElementsByName("zodiac2")[0];

var zodiac_comp = {
    "Aries": {
        "Aries": 51,
        "Taurus": 37,
        "Gemini": 84,
        "Cancer": 43,
        "Leo": 98,
        "Virgo": 62,
        "Libra": 86,
        "Scorpio": 51,
        "Sagittarius": 92,
        "Capricorn": 46,
        "Aquarius": 79,
        "Pisces": 68,
        "svg": `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
        <!-- Created with Sodipodi ("http://www.sodipodi.com/") -->
        
        <svg
           xmlns:dc="http://purl.org/dc/elements/1.1/"
           xmlns:cc="http://creativecommons.org/ns#"
           xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
           xmlns:svg="http://www.w3.org/2000/svg"
           xmlns="http://www.w3.org/2000/svg"
           xmlns:xlink="http://www.w3.org/1999/xlink"
           xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
           xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
           xml:space="preserve"
           width="50.39999pt"
           height="50.40002pt"
           style="fill-rule:evenodd;image-rendering:optimizeQuality;shape-rendering:geometricPrecision;text-rendering:geometricPrecision"
           viewBox="0 0 14297.794 21294.368"
           id="svg602"
           sodipodi:version="0.34"
           sodipodi:docname="AriesSymbol.svg"
           version="1.1"
           inkscape:version="0.91 r13725"><metadata
             id="metadata8"><rdf:RDF><cc:Work
                 rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type
                   rdf:resource="http://purl.org/dc/dcmitype/StillImage" /><dc:title></dc:title></cc:Work></rdf:RDF></metadata><sodipodi:namedview
             id="base"
             showgrid="true"
             inkscape:zoom="1.0042553"
             inkscape:cx="-10.652954"
             inkscape:cy="184.56357"
             inkscape:window-width="1600"
             inkscape:window-height="837"
             inkscape:window-x="-8"
             inkscape:window-y="-8"
             inkscape:window-maximized="1"
             inkscape:current-layer="svg602"
             fit-margin-top="0"
             fit-margin-left="0"
             fit-margin-right="0"
             fit-margin-bottom="0" /><defs
             id="defs603"><linearGradient
               id="linearGradient4238"><stop
                 style="stop-color:#aa0000;stop-opacity:1;"
                 offset="0"
                 id="stop4240" /><stop
                 style="stop-color:#790000;stop-opacity:1;"
                 offset="1"
                 id="stop4242" /></linearGradient><style
               type="text/css"
               id="style604"><![CDATA[
            .fil0 {fill:#000000}
           ]]></style><radialGradient
               inkscape:collect="always"
               xlink:href="#linearGradient4238"
               id="radialGradient4244"
               cx="5209.2461"
               cy="4065.9839"
               fx="5209.2461"
               fy="4065.9839"
               r="10448.17"
               gradientUnits="userSpaceOnUse"
               gradientTransform="matrix(1.004778,-0.03182544,0.0333086,1.0516029,1581.1594,6983.0511)" /></defs><g
             id="g4248"><path
               id="path4224"
               d="M 7148.8965,199.01367 A 10448.17,10448.17 0 0 0 -3299.2734,10647.184 10448.17,10448.17 0 0 0 7148.8965,21095.354 10448.17,10448.17 0 0 0 17597.066,10647.184 10448.17,10448.17 0 0 0 7148.8965,199.01367 Z"
               style="opacity:1;fill:#860000;fill-opacity:1;stroke:none;stroke-width:200;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               transform="translate(-2.7883746e-5,-7.1289037e-6)" /><path
               id="path4140"
               d="M 17597.067,10647.184 A 10448.17,10448.17 0 0 1 7148.897,21095.354 10448.17,10448.17 0 0 1 -3299.2729,10647.184 10448.17,10448.17 0 0 1 7148.897,199.01367 10448.17,10448.17 0 0 1 17597.067,10647.184 Z"
               style="opacity:1;fill:url(#radialGradient4244);fill-opacity:1;stroke:#5b0000;stroke-width:398.0255127;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" /><g
               style="fill:#ff9697;fill-opacity:1"
               transform="matrix(4.487579,0,0,4.505588,-5989.4333,-7687.7754)"
               id="Layer 1"><path
                 style="fill:#ff9697;fill-opacity:1"
                 inkscape:connector-curvature="0"
                 id="path606"
                 d="m 2796,5449 0,-134 c 0,-257 -26,-543 -77,-857 -52,-315 -115,-572 -189,-771 -162,-432 -336,-648 -523,-648 -83,0 -151,36 -204,109 -52,73 -78,167 -78,284 0,154 49,313 149,477 l -203,0 c -98,-177 -147,-343 -147,-497 0,-160 46,-292 138,-398 92,-106 208,-160 347,-160 225,0 415,151 573,454 157,301 256,706 297,1215 l 34,0 c 34,-498 132,-901 292,-1208 160,-307 354,-461 579,-461 139,0 254,53 346,158 92,104 138,236 138,396 0,155 -49,322 -146,501 l -204,0 c 99,-177 149,-339 149,-488 0,-119 -26,-215 -77,-289 -52,-73 -120,-110 -205,-110 -181,0 -350,202 -506,604 -80,205 -146,471 -201,798 -54,326 -81,626 -81,899 l 0,126 -201,0 z"
                 class="fil0" /></g></g></svg>`
        
    },
    "Taurus": {
        "Aries": 37,
        "Taurus": 66,
        "Gemini": 32,
        "Cancer": 98,
        "Leo": 72,
        "Virgo": 91,
        "Libra": 67,
        "Scorpio": 89,
        "Sagittarius": 32,
        "Capricorn": 98,
        "Aquarius": 57,
        "Pisces": 84,
        "svg": `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
        <!-- Created with Sodipodi ("http://www.sodipodi.com/") -->
        
        <svg
           xmlns:dc="http://purl.org/dc/elements/1.1/"
           xmlns:cc="http://creativecommons.org/ns#"
           xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
           xmlns:svg="http://www.w3.org/2000/svg"
           xmlns="http://www.w3.org/2000/svg"
           xmlns:xlink="http://www.w3.org/1999/xlink"
           xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
           xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
           xml:space="preserve"
           width="50.39999pt"
           height="50.40002pt"
           style="fill-rule:evenodd;image-rendering:optimizeQuality;shape-rendering:geometricPrecision;text-rendering:geometricPrecision"
           viewBox="0 0 14297.794 21294.368"
           id="svg602"
           sodipodi:version="0.34"
           sodipodi:docname="TaurusSymbol.svg"
           version="1.1"
           inkscape:version="0.91 r13725"><metadata
             id="metadata8"><rdf:RDF><cc:Work
                 rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type
                   rdf:resource="http://purl.org/dc/dcmitype/StillImage" /><dc:title></dc:title></cc:Work></rdf:RDF></metadata><sodipodi:namedview
             id="base"
             showgrid="true"
             inkscape:zoom="1.0042553"
             inkscape:cx="-10.652954"
             inkscape:cy="184.56357"
             inkscape:window-width="1600"
             inkscape:window-height="837"
             inkscape:window-x="-8"
             inkscape:window-y="-8"
             inkscape:window-maximized="1"
             inkscape:current-layer="svg602"
             fit-margin-top="0"
             fit-margin-left="0"
             fit-margin-right="0"
             fit-margin-bottom="0" /><defs
             id="defs603"><linearGradient
               id="linearGradient4238"><stop
                 style="stop-color:#aa0000;stop-opacity:1;"
                 offset="0"
                 id="stop4240" /><stop
                 style="stop-color:#790000;stop-opacity:1;"
                 offset="1"
                 id="stop4242" /></linearGradient><style
               type="text/css"
               id="style604"><![CDATA[
            .fil0 {fill:#000000}
           ]]></style><radialGradient
               inkscape:collect="always"
               xlink:href="#linearGradient4238"
               id="radialGradient4244"
               cx="5209.2461"
               cy="4065.9839"
               fx="5209.2461"
               fy="4065.9839"
               r="10448.17"
               gradientUnits="userSpaceOnUse"
               gradientTransform="matrix(1.004778,-0.03182544,0.0333086,1.0516029,1581.1594,6983.0511)" /><style
               id="style616"
               type="text/css"><![CDATA[
            .fil0 {fill:#000000}
           ]]></style></defs><g
             id="g4306"><path
               id="path4224"
               d="M 7148.8965,199.01366 A 10448.17,10448.17 0 0 0 -3299.2734,10647.184 10448.17,10448.17 0 0 0 7148.8965,21095.354 10448.17,10448.17 0 0 0 17597.066,10647.184 10448.17,10448.17 0 0 0 7148.8965,199.01366 Z"
               style="opacity:1;fill:#860000;fill-opacity:1;stroke:none;stroke-width:200;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               inkscape:connector-curvature="0" /><path
               id="path4140"
               d="M 17597.067,10647.184 A 10448.17,10448.17 0 0 1 7148.897,21095.354 10448.17,10448.17 0 0 1 -3299.2729,10647.184 10448.17,10448.17 0 0 1 7148.897,199.01367 10448.17,10448.17 0 0 1 17597.067,10647.184 Z"
               style="opacity:1;fill:url(#radialGradient4244);fill-opacity:1;stroke:#5b0000;stroke-width:398.0255127;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               inkscape:connector-curvature="0" /><g
               transform="translate(3014.897,5093.1723)"
               id="g4284"
               style="fill:#ff9697;fill-opacity:1;fill-rule:evenodd;image-rendering:optimizeQuality;shape-rendering:geometricPrecision;text-rendering:geometricPrecision"><g
                 style="fill:#ff9697;fill-opacity:1"
                 id="Layer 1-2"
                 transform="matrix(4.552447,0,0,4.540583,-8401.163,-13199.48)"><path
                   style="fill:#ff9697;fill-opacity:1"
                   inkscape:connector-curvature="0"
                   class="fil0"
                   d="m 2373,3861 c -89,-35 -160,-80 -216,-134 -55,-54 -116,-141 -183,-262 l -80,-144 c -98,-176 -210,-264 -334,-264 l -36,0 0,-150 99,0 c 176,0 336,124 479,371 l 109,192 c 74,126 150,214 230,264 80,51 184,76 313,76 129,0 233,-25 313,-76 80,-50 156,-138 229,-264 l 111,-192 c 142,-247 302,-371 477,-371 l 99,0 0,150 -35,0 c -125,0 -237,88 -335,264 l -80,144 c -67,121 -128,208 -183,262 -56,54 -128,99 -216,134 154,85 272,195 356,328 84,133 125,280 125,438 0,230 -85,430 -256,600 -172,170 -373,255 -605,255 -232,0 -433,-85 -605,-255 -172,-170 -258,-370 -258,-600 0,-158 42,-305 126,-438 84,-133 202,-243 356,-328 z m 381,1420 c 182,0 337,-63 467,-191 129,-126 194,-279 194,-458 0,-182 -65,-337 -193,-464 -128,-128 -284,-191 -468,-191 -183,0 -339,63 -469,191 -128,127 -193,282 -193,464 0,179 65,332 194,458 129,128 285,191 468,191 z"
                   id="path618" /></g></g></g></svg>
        `
    },
    "Gemini": {
        "Aries": 84,
        "Taurus": 32,
        "Gemini": 61,
        "Cancer": 66,
        "Leo": 88,
        "Virgo": 67,
        "Libra": 94,
        "Scorpio": 29,
        "Sagittarius": 61,
        "Capricorn": 66,
        "Aquarius": 84,
        "Pisces": 54,
        "svg": `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
        <!-- Created with Sodipodi ("http://www.sodipodi.com/") -->
        
        <svg
           xmlns:dc="http://purl.org/dc/elements/1.1/"
           xmlns:cc="http://creativecommons.org/ns#"
           xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
           xmlns:svg="http://www.w3.org/2000/svg"
           xmlns="http://www.w3.org/2000/svg"
           xmlns:xlink="http://www.w3.org/1999/xlink"
           xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
           xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
           xml:space="preserve"
           width="342.39999pt"
           height="342.40002pt"
           style="fill-rule:evenodd;image-rendering:optimizeQuality;shape-rendering:geometricPrecision;text-rendering:geometricPrecision"
           viewBox="0 0 14297.794 21294.368"
           id="svg602"
           sodipodi:version="0.34"
           sodipodi:docname="GeminiSymbol.svg"
           version="1.1"
           inkscape:version="0.91 r13725"><metadata
             id="metadata8"><rdf:RDF><cc:Work
                 rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type
                   rdf:resource="http://purl.org/dc/dcmitype/StillImage" /><dc:title></dc:title></cc:Work></rdf:RDF></metadata><sodipodi:namedview
             id="base"
             showgrid="true"
             inkscape:zoom="1.0042553"
             inkscape:cx="-10.652954"
             inkscape:cy="184.56357"
             inkscape:window-width="1600"
             inkscape:window-height="837"
             inkscape:window-x="-8"
             inkscape:window-y="-8"
             inkscape:window-maximized="1"
             inkscape:current-layer="svg602"
             fit-margin-top="0"
             fit-margin-left="0"
             fit-margin-right="0"
             fit-margin-bottom="0" /><defs
             id="defs603"><linearGradient
               id="linearGradient4238"><stop
                 style="stop-color:#aa0000;stop-opacity:1;"
                 offset="0"
                 id="stop4240" /><stop
                 style="stop-color:#790000;stop-opacity:1;"
                 offset="1"
                 id="stop4242" /></linearGradient><style
               type="text/css"
               id="style604"><![CDATA[
            .fil0 {fill:#000000}
           ]]></style><radialGradient
               inkscape:collect="always"
               xlink:href="#linearGradient4238"
               id="radialGradient4244"
               cx="5209.2461"
               cy="4065.9839"
               fx="5209.2461"
               fy="4065.9839"
               r="10448.17"
               gradientUnits="userSpaceOnUse"
               gradientTransform="matrix(1.004778,-0.03182544,0.0333086,1.0516029,1581.1594,6983.0511)" /><style
               id="style616"
               type="text/css"><![CDATA[
            .fil0 {fill:#000000}
           ]]></style><style
               id="style622"
               type="text/css"><![CDATA[
            .fil0 {fill:#000000}
           ]]></style></defs><g
             id="g4351"><path
               id="path4224"
               d="M 7148.8965,199.01367 A 10448.17,10448.17 0 0 0 -3299.2734,10647.184 10448.17,10448.17 0 0 0 7148.8965,21095.354 10448.17,10448.17 0 0 0 17597.066,10647.184 10448.17,10448.17 0 0 0 7148.8965,199.01367 Z"
               style="opacity:1;fill:#860000;fill-opacity:1;stroke:none;stroke-width:200;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               transform="translate(-2.7883746e-5,-7.1289037e-6)" /><path
               id="path4140"
               d="M 17597.067,10647.184 A 10448.17,10448.17 0 0 1 7148.897,21095.354 10448.17,10448.17 0 0 1 -3299.2729,10647.184 10448.17,10448.17 0 0 1 7148.897,199.01367 10448.17,10448.17 0 0 1 17597.067,10647.184 Z"
               style="opacity:1;fill:url(#radialGradient4244);fill-opacity:1;stroke:#5b0000;stroke-width:398.0255127;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" /><g
               transform="translate(3014.897,4895.8356)"
               id="g4345"
               style="fill-rule:evenodd;image-rendering:optimizeQuality;shape-rendering:geometricPrecision;text-rendering:geometricPrecision;fill:#ff9697;fill-opacity:1"><g
                 style="fill:#ff9697;fill-opacity:1"
                 id="Layer 1"
                 transform="matrix(5.152124,0,0,5.157475,-9408.358,-14342.93)"><path
                   style="fill:#ff9697;fill-opacity:1"
                   inkscape:connector-curvature="0"
                   class="fil0"
                   d="m 1524,5048 0,-167 c 186,-49 359,-84 518,-103 l 0,-1730 c -172,-16 -345,-49 -518,-99 l 0,-168 c 300,83 668,125 1104,125 437,0 805,-42 1105,-125 l 0,168 c -174,50 -347,83 -519,99 l 0,1730 c 159,19 332,54 519,103 l 0,167 c -342,-90 -710,-134 -1105,-134 -395,0 -763,44 -1104,134 z m 719,-282 c 115,-13 243,-19 385,-19 142,0 270,6 385,19 l 0,-1704 c -104,7 -232,11 -385,11 -154,0 -282,-4 -385,-11 l 0,1704 z"
                   id="path624" /></g></g></g></svg>
        `
    },
    "Cancer": {
        "Aries": 43,
        "Taurus": 98,
        "Gemini": 66,
        "Cancer": 75,
        "Leo": 34,
        "Virgo": 98,
        "Libra": 43,
        "Scorpio": 94,
        "Sagittarius": 52,
        "Capricorn": 84,
        "Aquarius": 28,
        "Pisces": 99,
        "svg": `<?xml version="1.0" standalone="no"?>
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
         "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
         width="1280.000000pt" height="1064.000000pt" viewBox="0 0 1280.000000 1064.000000"
         preserveAspectRatio="xMidYMid meet">
        <metadata>
        Created by potrace 1.15, written by Peter Selinger 2001-2017
        </metadata>
        <g transform="translate(0.000000,1064.000000) scale(0.100000,-0.100000)"
        fill="#000000" stroke="none">
        <path d="M3370 10634 c-671 -29 -1108 -90 -1408 -196 -48 -16 -139 -56 -202
        -89 -771 -392 -1361 -1016 -1568 -1659 -48 -147 -70 -299 -92 -610 -22 -335
        -22 -308 -3 -314 10 -3 264 -53 564 -111 l546 -107 414 142 c228 78 565 194
        749 257 184 63 351 120 370 126 37 13 45 25 99 148 l28 66 59 11 c52 10 703
        137 994 194 97 19 111 25 185 77 239 168 381 324 401 439 12 73 67 330 99 467
        19 77 32 141 30 143 -2 2 -234 -116 -517 -261 l-513 -265 -523 -12 c-287 -7
        -525 -10 -528 -7 -3 2 -14 28 -24 56 l-20 51 48 24 c26 13 322 153 657 311
        336 158 671 316 745 352 121 58 140 64 180 58 25 -3 160 -14 300 -25 140 -10
        291 -22 335 -26 l81 -7 36 79 c57 123 81 202 86 290 4 68 1 87 -16 121 -58
        113 -245 201 -542 255 -103 18 -159 21 -545 23 -236 1 -464 1 -505 -1z"/>
        <path d="M8515 10623 c-299 -36 -527 -112 -627 -211 -60 -58 -72 -94 -65 -191
        5 -83 29 -163 85 -284 l35 -79 56 6 c31 3 203 18 382 32 l325 26 790 -372
        c434 -205 790 -373 791 -374 1 -1 -7 -28 -19 -60 l-21 -57 -246 6 c-135 4
        -373 10 -528 15 l-281 8 -279 142 c-153 79 -383 197 -511 262 -128 66 -235
        119 -237 117 -2 -2 14 -78 36 -169 21 -91 55 -241 74 -333 21 -104 43 -182 56
        -203 59 -95 193 -222 360 -340 l82 -58 421 -83 c232 -45 494 -97 582 -114
        l161 -31 37 -93 c21 -52 43 -98 49 -103 7 -5 165 -61 352 -125 302 -103 758
        -259 1098 -376 l118 -40 282 55 c155 30 386 75 512 100 127 24 254 49 282 55
        l53 10 -6 92 c-38 637 -70 798 -219 1102 -128 260 -285 474 -520 711 -275 276
        -583 498 -934 673 -154 78 -240 110 -379 145 -277 70 -629 113 -1097 136 -193
        9 -980 12 -1050 3z"/>
        <path d="M4924 8616 c-141 -32 -262 -102 -375 -215 -64 -65 -95 -105 -123
        -161 -87 -177 -85 -377 6 -570 47 -100 157 -203 278 -262 52 -26 107 -50 122
        -53 20 -5 29 -15 33 -38 22 -104 227 -1042 239 -1090 l14 -58 -36 -23 c-85
        -53 -133 -78 -139 -73 -3 4 -17 39 -30 79 -51 150 -124 263 -196 299 -85 44
        -248 6 -527 -120 -512 -232 -1153 -655 -1465 -966 -246 -245 -300 -413 -200
        -620 46 -95 108 -173 275 -350 192 -203 205 -224 219 -350 15 -131 71 -411
        122 -604 120 -459 267 -834 415 -1057 165 -250 572 -538 1203 -853 195 -97
        227 -110 326 -130 61 -12 385 -78 721 -146 l610 -124 465 94 c1042 210 926
        183 1084 259 275 132 642 342 839 481 331 232 463 391 614 745 156 363 320
        966 362 1325 15 126 26 146 177 305 217 230 270 299 326 418 41 89 50 210 19
        289 -116 303 -786 825 -1551 1208 -347 173 -544 232 -654 196 -72 -24 -151
        -140 -212 -313 -15 -43 -29 -78 -32 -78 -17 0 -171 104 -168 113 3 7 63 270
        135 586 72 316 131 575 133 576 1 2 36 21 77 45 215 121 292 210 341 397 99
        380 -70 707 -421 814 -98 30 -265 32 -355 5 -106 -31 -194 -85 -275 -166 -134
        -134 -189 -259 -197 -450 -4 -89 -1 -130 12 -179 32 -122 107 -242 219 -349
        36 -35 66 -68 66 -73 0 -18 -223 -914 -229 -921 -3 -4 -36 10 -72 32 l-66 40
        -12 88 c-23 183 -61 252 -163 300 -235 112 -821 103 -999 -15 -70 -46 -107
        -138 -124 -303 l-7 -65 -63 -37 c-35 -21 -68 -38 -73 -38 -5 0 -14 21 -19 48
        -5 26 -56 235 -114 465 l-104 419 30 20 c63 44 201 194 232 254 110 207 75
        499 -82 705 -144 186 -419 293 -631 245z"/>
        <path d="M72 7238 c-52 -250 -77 -527 -69 -748 12 -307 76 -512 203 -649 68
        -73 109 -90 179 -72 151 38 483 272 1093 771 59 49 90 81 88 91 -2 11 -355
        570 -402 637 -2 4 -989 72 -1040 72 l-31 0 -21 -102z"/>
        <path d="M12093 7296 c-248 -17 -454 -33 -456 -36 -15 -16 -407 -633 -407
        -640 0 -17 452 -383 683 -554 254 -188 443 -298 532 -311 110 -17 250 164 310
        399 64 254 55 685 -25 1070 -11 54 -20 100 -20 102 0 9 -191 0 -617 -30z"/>
        <path d="M1793 6187 c-562 -373 -896 -642 -964 -775 -29 -57 -32 -159 -6 -208
        85 -163 391 -217 897 -158 69 8 165 21 213 29 l88 15 504 462 c277 254 503
        464 501 465 -11 11 -604 206 -771 254 -115 33 -215 62 -222 64 -6 2 -114 -65
        -240 -148z"/>
        <path d="M10580 6276 c-216 -62 -806 -260 -803 -270 1 -4 227 -213 502 -465
        l500 -459 65 -11 c339 -59 696 -71 886 -30 257 55 343 246 195 431 -93 116
        -382 345 -750 594 -233 158 -396 264 -404 263 -3 0 -89 -24 -191 -53z"/>
        <path d="M950 4388 c-250 -129 -574 -425 -700 -638 -78 -132 -84 -164 -85
        -435 0 -132 4 -270 8 -307 l8 -66 207 130 c114 72 361 227 549 345 l341 214
        807 -106 c444 -58 810 -103 813 -100 3 3 -32 179 -77 393 -92 436 -85 421
        -186 447 -153 39 -1097 136 -1480 151 l-140 6 -65 -34z"/>
        <path d="M11605 4409 c-536 -34 -1322 -117 -1452 -155 -68 -19 -88 -42 -106
        -122 -51 -225 -150 -712 -146 -716 2 -2 225 24 494 60 823 108 947 124 1040
        135 l90 11 544 -341 c299 -188 545 -340 548 -338 12 13 25 275 20 427 -7 236
        -27 299 -153 467 -181 242 -576 556 -724 575 -19 2 -89 1 -155 -3z"/>
        <path d="M2855 2826 c-99 -45 -360 -163 -580 -261 -283 -126 -407 -186 -425
        -206 -58 -64 -241 -447 -316 -662 -84 -239 -114 -477 -80 -630 32 -145 201
        -596 217 -580 4 4 203 294 443 643 l436 635 388 246 c213 136 386 251 385 255
        -6 25 -278 644 -282 643 -3 0 -87 -38 -186 -83z"/>
        <path d="M9747 2888 c-3 -7 -66 -153 -140 -325 l-135 -311 388 -246 387 -246
        439 -640 c241 -352 442 -640 445 -640 15 0 143 332 201 520 30 99 32 310 4
        440 -50 234 -167 525 -334 827 l-56 101 -580 260 c-320 144 -588 264 -597 267
        -9 3 -19 0 -22 -7z"/>
        <path d="M3780 1735 c-116 -60 -291 -280 -497 -623 l-93 -156 0 -81 c0 -172
        44 -431 91 -529 28 -61 117 -165 191 -225 92 -76 158 -105 244 -109 l71 -4 6
        193 c4 107 10 271 14 366 l6 171 354 248 c217 152 352 252 349 260 -3 7 -8 29
        -12 49 -7 40 -58 85 -304 267 -230 171 -276 198 -328 198 -29 -1 -64 -10 -92
        -25z"/>
        <path d="M8862 1738 c-49 -26 -343 -239 -466 -338 -83 -67 -103 -94 -108 -147
        -3 -30 7 -38 348 -276 l351 -246 7 -188 c3 -103 9 -268 13 -367 l6 -178 72 4
        c55 4 85 12 132 37 117 62 257 204 304 307 46 101 89 355 89 527 l0 74 -83
        139 c-206 345 -381 569 -497 637 -67 39 -116 43 -168 15z"/>
        </g>
        </svg>
        `
    },
    "Leo": {
        "Aries": 98,
        "Taurus": 72,
        "Gemini": 88,
        "Cancer": 34,
        "Leo": 46,
        "Virgo": 35,
        "Libra": 98,
        "Scorpio": 57,
        "Sagittarius": 94,
        "Capricorn": 35,
        "Aquarius": 68,
        "Pisces": 37,
        "svg": `<?xml version="1.0" standalone="no"?>
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
         "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
         width="1280.000000pt" height="1064.000000pt" viewBox="0 0 1280.000000 1064.000000"
         preserveAspectRatio="xMidYMid meet">
        <metadata>
        Created by potrace 1.15, written by Peter Selinger 2001-2017
        </metadata>
        <g transform="translate(0.000000,1064.000000) scale(0.100000,-0.100000)"
        fill="#000000" stroke="none">
        <path d="M9081 10624 c-68 -7 -125 -15 -127 -17 -2 -2 -45 -120 -96 -263 -50
        -142 -94 -263 -98 -267 -4 -5 -74 110 -155 255 -82 145 -154 269 -161 277 -10
        11 -38 8 -170 -19 -141 -29 -179 -42 -341 -113 -163 -71 -182 -82 -178 -101
        10 -43 145 -802 145 -813 0 -7 -17 -3 -42 9 -288 140 -733 348 -738 346 -3 -2
        -73 -52 -153 -112 l-147 -110 -87 -150 c-47 -83 -87 -154 -90 -158 -2 -4 151
        -173 341 -375 189 -202 343 -369 341 -371 -1 -2 -51 13 -111 32 -60 19 -255
        80 -434 136 -179 56 -359 113 -400 126 l-75 24 -136 -137 -135 -138 -39 -188
        c-22 -110 -34 -191 -29 -196 5 -4 229 -106 498 -227 429 -192 485 -220 460
        -226 -16 -4 -263 -40 -549 -78 -286 -39 -534 -73 -552 -76 l-31 -6 -42 -167
        c-39 -159 -77 -445 -61 -462 3 -3 229 -23 501 -43 272 -21 512 -40 534 -44 34
        -6 17 -13 -185 -71 -567 -163 -861 -250 -867 -255 -3 -4 -12 -102 -19 -218
        l-13 -211 -103 -146 c-57 -80 -173 -245 -258 -366 -131 -187 -175 -241 -294
        -361 -306 -308 -666 -533 -1210 -757 -238 -98 -719 -276 -789 -292 -97 -22
        -177 -33 -411 -55 -422 -40 -564 -78 -730 -195 -79 -56 -227 -212 -343 -360
        -107 -137 -374 -533 -415 -615 -24 -48 -36 -117 -102 -555 -95 -634 -95 -635
        -105 -635 -4 0 -29 10 -55 21 l-48 21 7 262 c10 396 39 710 83 881 62 248 297
        677 719 1312 l214 321 198 199 c199 199 347 362 478 528 415 524 695 1104 875
        1815 59 235 75 393 59 594 -43 521 -317 811 -928 981 -55 16 -65 23 -82 54
        -24 48 -40 109 -54 205 l-12 79 -99 39 c-347 135 -671 218 -851 218 -139 0
        -288 -60 -519 -211 -130 -84 -315 -221 -315 -232 0 -10 103 -164 214 -317 199
        -276 315 -403 403 -441 116 -50 287 -62 482 -33 138 20 166 28 418 114 l211
        72 99 -42 c185 -79 302 -169 352 -273 41 -85 53 -155 58 -352 5 -174 4 -199
        -17 -290 -148 -652 -595 -1386 -1291 -2120 -186 -197 -721 -951 -975 -1377
        -155 -260 -244 -445 -308 -646 -176 -548 -240 -1205 -160 -1637 76 -406 309
        -879 732 -1482 l86 -123 325 0 c179 0 1414 -5 2745 -11 1330 -5 2420 -8 2423
        -5 8 8 224 619 226 637 0 9 -42 118 -93 242 l-95 226 -940 2 c-517 1 -943 1
        -947 0 -16 -2 -6 12 106 152 218 273 340 458 437 662 124 260 195 569 168 730
        -30 183 -138 399 -296 593 -79 97 -281 299 -410 409 -99 85 -111 98 -95 108
        53 35 250 145 261 145 29 0 288 -237 421 -385 281 -314 430 -581 477 -854 35
        -209 -30 -480 -203 -840 -86 -179 -151 -290 -242 -414 -35 -48 -62 -90 -60
        -92 5 -6 471 71 772 126 653 120 1162 242 1416 341 205 80 541 262 953 515
        120 74 221 133 223 131 2 -3 20 -144 39 -314 l36 -309 10 -880 c6 -484 12
        -891 15 -903 l5 -24 832 6 c458 4 873 9 923 12 l90 6 64 290 64 290 -22 86
        c-32 126 -94 245 -161 312 -107 106 -206 141 -516 185 -99 14 -203 30 -232 36
        -49 10 -52 12 -48 37 3 15 19 135 35 267 17 132 46 353 65 491 l35 252 150
        442 c82 244 151 444 152 445 2 1 98 -33 213 -77 116 -43 316 -117 445 -164
        129 -48 294 -108 365 -135 72 -26 227 -83 345 -127 l215 -80 -4 -303 -3 -304
        37 -93 c45 -111 115 -222 175 -276 124 -111 271 -130 499 -64 126 37 210 132
        292 332 58 140 102 318 96 386 -6 61 -107 366 -247 745 -51 138 -97 265 -103
        284 -7 20 -25 42 -47 55 -19 13 -399 226 -845 476 -445 249 -816 458 -823 465
        -11 9 5 45 82 186 l95 174 -39 475 c-21 261 -36 477 -34 479 2 2 34 -23 71
        -56 37 -32 159 -139 271 -237 l203 -178 57 54 c31 29 98 92 149 139 l92 85
        -95 440 c-52 241 -101 467 -108 502 -11 47 -11 64 -3 67 7 2 185 24 396 49
        211 25 385 47 386 48 7 7 165 378 165 385 0 5 -51 21 -114 37 -63 15 -121 33
        -129 39 -8 7 -40 100 -72 207 -31 107 -60 201 -64 208 -5 8 -39 -45 -91 -143
        -46 -86 -89 -163 -95 -171 -9 -13 -59 -3 -380 77 -204 50 -373 95 -378 98 -4
        4 99 86 229 182 l235 174 319 41 c317 40 319 40 324 20 3 -12 21 -106 41 -211
        20 -104 38 -197 41 -205 4 -9 60 93 136 245 l130 260 175 170 175 170 29 230
        c16 126 25 232 21 236 -4 4 -119 50 -256 104 -275 107 -226 96 -718 161 -152
        20 -218 33 -218 41 0 7 36 163 80 346 44 184 80 336 80 340 0 4 -185 171 -411
        372 l-410 366 -37 -30 c-20 -17 -104 -89 -187 -160 -82 -72 -152 -126 -153
        -120 -2 5 8 97 23 205 15 109 23 200 19 204 -9 9 -474 180 -490 180 -5 1 -100
        -93 -211 -207 -163 -167 -205 -205 -213 -193 -5 8 -42 108 -81 223 -60 172
        -75 208 -93 212 -40 9 -260 35 -286 34 -14 -1 -81 -8 -149 -15z"/>
        </g>
        </svg>
        `
    },
    "Virgo": {
        "Aries": 62,
        "Taurus": 91,
        "Gemini": 67,
        "Cancer": 91,
        "Leo": 35,
        "Virgo": 64,
        "Libra": 68,
        "Scorpio": 89,
        "Sagittarius": 49,
        "Capricorn": 96,
        "Aquarius": 31,
        "Pisces": 88,
        "svg": ``
    },
    "Libra": {
        "Aries": 86,
        "Taurus": 67,
        "Gemini": 94,
        "Cancer": 43,
        "Leo": 98,
        "Virgo": 68,
        "Libra": 74,
        "Scorpio": 35,
        "Sagittarius": 74,
        "Capricorn": 55,
        "Aquarius": 90,
        "Pisces": 88
    },
    "Scorpio": {
        "Aries": 51,
        "Taurus": 89,
        "Gemini": 29,
        "Cancer": 94,
        "Leo": 51,
        "Virgo": 89,
        "Libra": 35,
        "Scorpio": 80,
        "Sagittarius": 29,
        "Capricorn": 96,
        "Aquarius": 74,
        "Pisces": 97
    },
    "Sagittarius": {
        "Aries": 92,
        "Taurus": 32,
        "Gemini": 61,
        "Cancer": 53,
        "Leo": 94,
        "Virgo": 49,
        "Libra": 74,
        "Scorpio": 29,
        "Sagittarius": 45,
        "Capricorn": 61,
        "Aquarius": 92,
        "Pisces": 63
    },
    "Capricorn": {
        "Aries": 46,
        "Taurus": 98,
        "Gemini": 66,
        "Cancer": 84,
        "Leo": 35,
        "Virgo": 96,
        "Libra": 55,
        "Scorpio": 96,
        "Sagittarius": 61,
        "Capricorn": 75,
        "Aquarius": 68,
        "Pisces": 88
    },
    "Aquarius": {
        "Aries": 79,
        "Taurus": 57,
        "Gemini": 84,
        "Cancer": 28,
        "Leo": 68,
        "Virgo": 31,
        "Libra": 90,
        "Scorpio": 73,
        "Sagittarius": 90,
        "Capricorn": 68,
        "Aquarius": 45,
        "Pisces": 45
    },
    "Pisces": {
        "Aries": 68,
        "Taurus": 84,
        "Gemini": 54,
        "Cancer": 99,
        "Leo": 37,
        "Virgo": 88,
        "Libra": 88,
        "Scorpio": 97,
        "Sagittarius": 63,
        "Capricorn": 88,
        "Aquarius": 45,
        "Pisces": 60
    }
}


calculate = () => {
    var zodiac1_value = zodiac1.value;
    var zodiac2_value = zodiac2.value;
    document.querySelector('.background').style.opacity = "0";
    document.querySelector('.tag-line').style.display = "none";
    document.querySelector('.user-info').style.display = "none";
    document.querySelector('.my-chart').innerHTML = '<canvas id="loveper"></canvas>'
    const lovechart = document.getElementById('loveper').getContext('2d');
    const myChart = new Chart(lovechart, {
        type: 'doughnut',
        data: {
            datasets: [{
                label: 'Love Meter',
                data: [zodiac_comp[zodiac1_value][zodiac2_value], 100-(zodiac_comp[zodiac1_value][zodiac2_value])],
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
    document.querySelector('.love-percentage').innerHTML = `Your Zodiac Compatiblity with ${name2.value} is ${zodiac_comp[zodiac1_value][zodiac2_value]}%` 
    document.querySelector('.love-info').innerHTML = `<img>${zodiac_comp[zodiac1_value]['svg']}</img><img>${zodiac_comp[zodiac2_value]['svg']}</img>`
}

