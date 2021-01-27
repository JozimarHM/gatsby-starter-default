import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const homePage = () => ( 

<Layout>

  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="author" content="Jozimar Henriques Moreto" />
    <link type="image/x-icon" href="./favicon.ico" rel="shortcut icon"/>
    <title>Iluminação</title>
  </head>
    <body>
        <nav className="navbar">
        <div className="content ">
            <img className="logo" id="logotipo" src=".images/JhsoftwareBranco.png"  alt="LogoRegistrado"/>
            <ul className="menu-list">
            <div className="icon cancel-btn">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" className="svg-inline--fa fas fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
            </div>
            <li><a  href="#PaginaInicial" onclick="hide(); esconde();" onmouseout="" id="mostra">Página Inicial</a></li>
            <li><a  href="#Velocidade" onclick="mostrar(this); esconde();" onmouseout="" id="mostra1"> Controles</a></li>
            {/* <li><a  href="#Intensidade" onclick="mostrar(this);" onmouseout="" id="mostra2">Intensidade</a></li> */}
            <li><a  href="#Efeitos" onclick="mostrar(this); esconde();" onmouseout="" id="mostra3">Efeitos</a></li>
            <li><a  href="#color" onclick="mostrar(this); esconde();" onmouseout="" id="mostra4">Cor</a></li>
            <li><a  href="#Enviartexto" onclick="mostrar(this); esconde();" onmouseout="" id="mostra5">Enviar Texto</a></li>
            <li><a  href="#controlecasa" onclick="mostrar(this); esconde();" onmouseout="" id="mostra6">Casa</a></li>
            <li><a href="'/login?DESCONECTAR=YES\'">Desconectar</a></li>
        </ul>
        <div className="icon menu-btn">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" className="svg-inline--fa fas fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
        </div>
    </div>
    </nav>
        <div className="banner"></div>
            <div className="about">
                <div className="content">
                    <center>
                        <table margin="center">
                            <tr>
                            <th colspan="3">teste MQTT</th>
                            </tr>
                            <tr>
                            <th id="toggle">Status: n/d</th>
                            </tr>
                        </table>
                        <div id="cores" style="display:none;">
                            {/* <button id="mostra7" onclick=""> Modo Tela Cheia</button><br /> --> */}
                                <label for="favcolor">Selecione a cor:</label><br /><br />
                                <input type="color" id="favcolor" name="favcolor" value="#ff0000"/><br /><br />
                                <button onclick="escrevercor(this);">Enviar</button>
                                <br /><span id="coraqui"></span>
                            <br />
                            <div className="containtable">
                            <table className="table" id="table">
                                <thead>
                                <tr>
                                    <th colspan="4">Selecione a Cor</th>
                                {/* //  <th>Código hexadecimal</th> */}
                                    {/* <th>Código RGB</th> --> */}
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td style="background-color: #000000; color: #ffffff;">Black</td>
                                    <td style="background-color: #1c1c1c; color: #ffffff;">grey11</td>
                                    <td style="background-color: #363636; color: #ffffff;">grey21</td>
                                    <td style="background-color: #4f4f4f;color: #ffffff;">grey31</td>
                                </tr>
                                <tr>
                                    <td style="background-color: #696969; color: #ffffff;">DimGray</td>
                                    <td style="background-color: #808080; color: #ffffff;">Gray</td>
                                    <td style="background-color: #a9a9a9; color: #ffffff;">DarkGray</td>
                                    <td style="background-color: #c0c0c0; color: #ffffff;">Silver</td>
                                </tr>
                                <tr>
                                    <td style="background-color: #d3d3d3; color: #ffffff;">LightGrey</td>              
                                    <td style="background-color: #dcdcdc; color: #ffffff;">Gainsboro</td>           
                                    <td style="background-color: #6a5acd; ">SlateBlue</td>                  
                                    <td style="background-color: #836fff;">SlateBlue1</td>
                                </tr>
                                <tr>
                                    <td style="background-color: #6959cd;">SlateBlue3</td>              
                                
                                    <td style="background-color: #483d8b;">DarkSlateBlue</td>              
                                
                                    <td style="background-color: #191970;">MidnightBlue</td>              
                                
                                    <td style="background-color: #000080;">Navy</td>
                                
                                </tr>
                                <tr>
                                    <td style="background-color: #00008b;">DarkBlue</td>           
                                
                                    <td style="background-color: #0000cd;">MediumBlue</td>              
                                
                                    <td style="background-color: #0000ff;">Blue</td>         
                                
                                    <td style="background-color: #6495ed;">CornflowerBlue</td>
                                </tr>
                                <tr>
                                    <td style="background-color: #4169e1;">RoyalBlue</td>
                                
                                    <td style="background-color: #1e90ff;">DodgerBlue</td>
                                
                                    <td style="background-color: #00bfff;">DeepSkyBlue</td>
                                
                                    <td style="background-color: #87cefa;">LightSkyBlue</td>
                                </tr>
                                <tr>
                                    <td style="background-color: #87ceeb;">SkyBlue</td>
                                    <td style="background-color: #add8e6;">LightBlue</td>
                                    <td style="background-color: #4682b4;">SteelBlue</td>
                                    <td style="background-color: #b0c4de;">LightSteelBlue</td>
                                </tr>
                                <tr>
                                    <td style="background-color: #708090;">SlateGray</td>
                                    <td style="background-color: #778899;">LightSlateGray</td>
                                    <td style="background-color: #00ffff;">Aqua / Cyan</td>
                                    <td style="background-color: #00ced1;">DarkTurquoise</td>
                                </tr>
                                <tr>
                                    <td style="background-color: #40e0d0;">Turquoise</td>
                                    <td style="background-color: #48d1cc;">MediumTurquoise</td>
                                    <td style="background-color: #20b2aa;">LightSeaGreen</td>
                                    <td style="background-color: #008b8b;">DarkCyan</td>
                                </tr>
                                <tr>
                                    <td style="background-color: #008080;">Teal</td>
                                    <td style="background-color: #7fffd4;">Aquamarine</td>
                                    <td style="background-color: #66cdaa;">MediumAquamarine</td>
                                    <td style="background-color: #5f9ea0;">CadetBlue</td>
                                </tr>
                                <tr>
                                    <td style="background-color: #2f4f4f;">DarkSlateGray</td>
                                    <td style="background-color: #00fa9a;">MediumSpringGreen</td>
                                    <td style="background-color: #00ff7f;">SpringGreen</td>
                                    <td style="background-color: #98fb98;">PaleGreen</td>
                                </tr>
                                <tr>
                                    <td style="background-color: #90ee90;">LightGreen</td>
                                    <td style="background-color: #8fbc8f;">DarkSeaGreen</td>
                                    <td style="background-color: #3cb371;">MediumSeaGreen</td>
                                    <td style="background-color: #2e8b57;">SeaGreen</td>
                                </tr>
                                <tr>
                                    <td style="background-color: #006400;">DarkGreen</td>
                                    <td style="background-color: #008000;">Green</td>
                                    <td style="background-color: #228b22;">ForestGreen</td>
                                    <td style="background-color: #32cd32;">LimeGreen</td>
                                </tr>
                                <tr>
                                    <td style="background-color: #00ff00;">Lime</td>
                                    <td style="background-color: #7cfc00;">LawnGreen</td>
                                    <td style="background-color: #7fff00;">Chartreuse</td>
                                    <td style="background-color: #adff2f;">GreenYellow</td>
                                </tr>
                                <tr>
                                    <td style="background-color: #9acd32;">YellowGreen</td>
                                    <td style="background-color: #6b8e23;">OliveDrab</td>
                                    <td style="background-color: #556b2f;">DarkOliveGreen</td>
                                    <td style="background-color: #808000;">Olive</td>
                                </tr>
                                <tr>
                                    <td style="background-color: #bdb76b;">DarkKhaki</td>
                                    <td style="background-color: #daa520;">Goldenrod</td>       
                                    <td style="background-color: #b8860b;">DarkGoldenrod</td>
                                    <td style="background-color: #8b4513;">SaddleBrown</td>
                                </tr>
                                <tr>
                                    <td style="background-color: #a0522d;">Sienna</td>
                                    <td style="background-color: #bc8f8f;">RosyBrown</td>
                                    <td style="background-color: #cd853f;">Peru</td>              
                                    <td style="background-color: #d2691e;">Chocolate</td>
                                </tr>
                                <tr>
                                    <td style="background-color: #f4a460;">SandyBrown</td>
                                    <td style="background-color: #ffdead;">NavajoWhite</td>              
                                    <td style="background-color: #f5deb3;">Wheat</td>
                                    <td style="background-color: #deb887;">BurlyWood</td>
                                </tr>
                                <tr>
                                    <td style="background-color: #d2b48c;">Tan</td>
                                    <td style="background-color: #7b68ee;">MediumSlateBlue</td>
                                    <td style="background-color: #9370db;">MediumPurple</td>
                                    <td style="background-color: #8a2be2;">BlueViolet</td>
                                </tr>
                                <tr>
                                    <td style="background-color: #4b0082;">Indigo</td>
                                    <td style="background-color: #9400d3;">DarkViolet</td>
                                    <td style="background-color: #9932cc;">DarkOrchid</td>
                                    <td style="background-color: #ba55d3;">MediumOrchid</td>
                                </tr>
                                <tr>
                                    <td style="background-color: #a020f0;">Purple</td>
                                    <td style="background-color: #8b008b;">DarkMagenta</td>
                                    <td style="background-color: #ff00ff;">Fuchsia / Magenta</td>
                                    <td style="background-color: #ee82ee;">Violet</td>
                                </tr>
                                <tr>
                                    <td style="background-color: #da70d6;">Orchid</td>
                                    <td style="background-color: #dda0dd;">Plum</td>
                                    <td style="background-color: #c71585;">MediumVioletRed</td>
                                    <td style="background-color: #ff1493;">DeepPink</td>
                                </tr>
                                <tr>
                                    <td style="background-color: #ff69b4;">HotPink</td>
                                    <td style="background-color: #db7093;">PaleVioletRed</td>
                                    <td style="background-color: #ffb6c1;">LightPink</td>
                                    <td style="background-color: #ffc0cb;">Pink</td>
                                </tr>
                                <tr>
                                    <td style="background-color: #f08080;">LightCoral</td>
                                    <td style="background-color: #cd5c5c;">IndianRed</td>
                                    <td style="background-color: #dc143c;">Crimson</td>
                                    <td style="background-color: #800000;">Maroon</td>
                                </tr>
                                <tr>
                                    <td style="background-color: #8b0000;">DarkRed</td>
                                    <td style="background-color: #b22222;">FireBrick</td>              
                                    <td style="background-color: #a52a2a;">Brown</td>              
                                    <td style="background-color: #fa8072;">Salmon</td>
                                </tr>
                                <tr>
                                    <td style="background-color: #e9967a;">DarkSalmon</td>
                                    <td style="background-color: #ffa07a;">LightSalmon</td>
                                    <td style="background-color: #ff7f50;">Coral</td>
                                    <td style="background-color: #ff6347;">Tomato</td>
                                </tr>
                                <tr>
                                    <td style="background-color: #ff0000;">Red</td>
                                    <td style="background-color: #ff4500;">OrangeRed</td>
                                    <td style="background-color: #ff8c00;">DarkOrange</td>
                                    <td style="background-color: #ffa500;">Orange</td>
                                </tr>
                                <tr>
                                
                                    <td style="background-color: #ffd700;">Gold</td>
                                    <td style="background-color: #ffff00;">Yellow</td>
                                    <td style="background-color: #f0e68c;">Khaki</td>
                                    <td style="background-color: #ffffff;">Branco</td>
                                </tr>
                                <tr>
                                    <td style="background-color: #fff5ee;">Seashell</td>
                                    <td style="background-color: #fffaf0;">FloralWhite</td>
                                    <td style="background-color: #f5f5f5;">WhiteSmoke</td>        
                                    <td style="background-color: #f5f5dc;">Beige</td>
                                </tr>
                                <tr>
                                    <td style="background-color: #fdf5e6;">OldLace</td>             
                                    <td style="background-color: #fffff0;">Ivory</td>
                                    <td style="background-color: #faf0e6;">Linen</td>             
                                    <td style="background-color: #fff8dc;">Cornsilk</td>
                                </tr>
                                <tr>
                                    <td style="background-color: #faebd7;">AntiqueWhite</td>             
                                    <td style="background-color: #ffebcd;">BlanchedAlmond</td> 
                                    <td style="background-color: #ffe4c4;">Bisque</td>              
                                    <td style="background-color: #ffffe0;">LightYellow</td>
                                </tr>
                                <tr>
                                    <td style="background-color: #fffacd;">LemonChiffon</td>
                                    <td style="background-color: #fafad2;">LightGoldenrodYellow</td> 
                                    <td style="background-color: #ffefd5;">PapayaWhip</td>
                                    <td style="background-color: #ffdab9;">PeachPuff</td>
                                </tr>
                                <tr>
                                    <td style="background-color: #ffe4b5;">Moccasin</td>
                                    <td style="background-color: #eee8aa;">PaleGoldenrod</td> 
                                    <td style="background-color: #ffe4e1;">MistyRose</td>
                                    <td style="background-color: #fff0f5;">LavenderBlush</td>
                                </tr>
                                <tr>
                                    <td style="background-color: #e6e6fa;">Lavender</td>              
                                    <td style="background-color: #d8bfd8;">Thistle</td>              
                                    <td style="background-color: #f0ffff;">Azure</td>          
                                    <td style="background-color: #e0ffff;">LightCyan</td>
                                </tr>
                                <tr>
                                    <td style="background-color: #b0e0e6;">PowderBlue</td>
                                    <td style="background-color: #e0ffff;">PaleTurquoise</td>
                                    <td style="background-color: #f0fff0;">Honeydew</td>
                                    <td style="background-color: #f5fffa;">MintCream</td>
                                </tr>
                                </tbody>
                            </table>
                            </div>
                        </div>
                        <div id="areatexto" style="display:none;">
                                <textarea id="txtInput" rows="10" cols="40" maxlength="500"></textarea>
                                <br />
                                <button id="enviatexto" onclick="escrever(this);">Enviar</button>
                                <br />
                                <span id="meuTextoVaiAqui"></span>
                                <br />
                                <br />
                                <br />
                        </div>
                        <div id="control" style="display:none;">
                            <h2>Velocidade do efeito</h2>
                            <p/><input type="range" list="tickmarks" onchange="atualizaValorSlider(this)" id="pwmSlider" min="10" max="65535" value="10" step="1" className="slider"></input>
                            <p/>
                                    <div className="label">
                                    <p><span id="valorSpeed">----</span></p>
                                    </div>
                                    <br />
                                                
                            <h2>Intensidade do Brilho</h2>
                            <p /><input type="range" list="tickmarks1" onchange="atualizaValorSlider2(this)" id="pwmSlider2" min="0" max="255" value="0" step="1" className="slider"></input><p/>
                                    <div className="label">
                                    <p><span  id="valorBrilho">----</span></p>
                                    </div>
                                    <br />
                                    <br />
                                    <br />
                        </div>
                        <div id="mode" className="button-group" style="display:none;">
                                <div className="labelbutton">
                                <p><div id="divTeste"> </div></p>
                                </div>
                            <button id="button0" onclick="toggleLed('0')">Modo 0</button>
                            <button id="button1" onclick="toggleLed('1')">Modo 1</button>
                            <button id="button2" onclick="toggleLed('2')">Modo 2</button>
                            <button id="button3" onclick="toggleLed('3')">Modo 3</button>
                            <button id="button4" onclick="toggleLed('4')">Modo 4</button><br />
                            <hr/>
                                <div className="labelbutton">
                                    <p><div id="divTeste1"> </div></p>
                                </div>
                            <button id="button5" onclick="toggleLed('5')">Modo 5</button>
                            <button id="button6" onclick="toggleLed('6')">Modo 6</button>
                            <button id="button7" onclick="toggleLed('7')">Modo 7</button>
                            <button id="button8" onclick="toggleLed('8')">Modo 8</button>
                            <button id="button9" onclick="toggleLed('9')">Modo 9</button><br />
                            <hr/>
                                <div className="labelbutton">
                                    <p><div id="divTeste2"> </div></p>
                                </div>
                            <button id="button10" onclick="toggleLed('10')">Modo 10</button>
                            <button id="button11" onclick="toggleLed('11')">Modo 11</button>
                            <button id="button12" onclick="toggleLed('12')">Modo 12</button>
                            <button id="button13" onclick="toggleLed('13')">Modo 13</button>
                            <button id="button14" onclick="toggleLed('14')">Modo 14</button><br />
                            <hr/>
                                <div className="labelbutton">
                                    <p><div id="divTeste3"> </div></p>
                                </div>
                            <button id="button15" onclick="toggleLed('15')">Modo 15</button>
                            <button id="button16" onclick="toggleLed('16')">Modo 16</button>
                            <button id="button17" onclick="toggleLed('17')">Modo 17</button>
                            <button id="button18" onclick="toggleLed('18')">Modo 18</button>
                            <button id="button19" onclick="toggleLed('19')">Modo 19</button><br />
                            <hr/>
                                <div className="labelbutton">
                                    <p><div id="divTeste4"> </div></p>
                                </div>
                            <button id="button20" onclick="toggleLed('20')">Modo 20</button>
                            <button id="button21" onclick="toggleLed('21')">Modo 21</button>
                            <button id="button22" onclick="toggleLed('22')">Modo 22</button>
                            <button id="button23" onclick="toggleLed('23')">Modo 23</button>
                            <button id="button24" onclick="toggleLed('24')">Modo 24</button><br />
                            <hr/>
                                <div className="labelbutton">
                                    <p><div id="divTeste5"> </div></p>
                                </div>
                            <button id="button25" onclick="toggleLed('25')">Modo 25</button>
                            <button id="button26" onclick="toggleLed('26')">Modo 26</button>
                            <button id="button27" onclick="toggleLed('27')">Modo 27</button>
                            <button id="button28" onclick="toggleLed('28')">Modo 28</button>
                            <button id="button29" onclick="toggleLed('29')">Modo 29</button><br />
                            <hr/>
                                <div className="labelbutton">
                                    <p><div id="divTeste6"> </div></p>
                                </div>
                            <button id="button30" onclick="toggleLed('30')">Modo 30</button>
                            <button id="button31" onclick="toggleLed('31')">Modo 31</button>
                            <button id="button32" onclick="toggleLed('32')">Modo 32</button>
                            <button id="button33" onclick="toggleLed('33')">Modo 33</button>
                            <button id="button34" onclick="toggleLed('34')">Modo 34</button><br />
                            <hr/>
                                <div className="labelbutton">
                                    <p><div id="divTeste7"> </div></p>
                                </div>
                            <button id="button35" onclick="toggleLed('35')">Modo 35</button>
                            <button id="button36" onclick="toggleLed('36')">Modo 36</button>
                            <button id="button37" onclick="toggleLed('37')">Modo 37</button>
                            <button id="button38" onclick="toggleLed('38')">Modo 38</button>
                            <button id="button39" onclick="toggleLed('39')">Modo 39</button><br />
                            <hr/>
                                <div className="labelbutton">
                                    <p><div id="divTeste8"> </div></p>
                                </div>
                            <button id="button40" onclick="toggleLed('40')">Modo 40</button>
                            <button id="button41" onclick="toggleLed('41')">Modo 41</button>
                            <button id="button42" onclick="toggleLed('42')">Modo 42</button>
                            <button id="button43" onclick="toggleLed('43')">Modo 43</button>
                            <button id="button44" onclick="toggleLed('44')">Modo 44</button><br />
                            <hr/>
                            <div className="labelbutton">
                                <p><div id="divTeste9"> </div></p>
                            </div>
                            <button id="button45" onclick="toggleLed('45')">Modo 45</button>
                            <button id="button46" onclick="toggleLed('46')">Modo 46</button>
                            <button id="button47" onclick="toggleLed('47')">Modo 47</button>
                            <button id="button48" onclick="toggleLed('48')">Modo 48</button>
                            <button id="button49" onclick="toggleLed('49')">Modo 49</button><br />
                            <hr/>
                                <div className="labelbutton">
                                    <p><div id="divTeste10"> </div></p>
                                </div>
                            <button id="button50" onclick="toggleLed('50')">Modo 50</button>
                            <button id="button51" onclick="toggleLed('51')">Modo 51</button>
                            <button id="button52" onclick="toggleLed('52')">Modo 52</button>
                            <button id="button53" onclick="toggleLed('53')">Modo 53</button>
                            <button id="button54" onclick="toggleLed('54')">Modo 54</button><br />
                            <hr/>
                                <div className="labelbutton">
                                    <p><div id="divTeste11"> </div></p>
                                </div>
                            <button id="button55" onclick="toggleLed('55')">Modo 55</button>
                            <button id="button56" onclick="toggleLed('56')">Modo 56</button>
                            <button id="button57" onclick="toggleLed('57')">Modo 57</button>
                            <button id="button58" onclick="toggleLed('58')">Modo 58</button>
                            <button id="button59" onclick="toggleLed('59')">Modo 59</button><br />
                            <hr/>
                                <div className="labelbutton">
                                    <p><div id="divTeste12"> </div></p>
                                </div>
                            <button id="button60" onclick="toggleLed('60')">Modo 60</button>
                            <button id="button61" onclick="toggleLed('61')">Modo 61</button>
                            <button id="button62" onclick="toggleLed('62')">Modo 62</button>
                            <button id="button63" onclick="toggleLed('63')">Modo 63</button>
                            <button id="button64" onclick="toggleLed('64')">Modo 64</button><br />
                            <hr/>
                            <br />
                        </div>
                        <div id="controlecasa" style="display:none;">
                                <h2>Toque no cômodo para acender a luz do Ambiente:</h2>
                                {/* <img className="casas" id="casacontrole" src="./casa2.0_preview_rev_1.png"  alt="casa" usemap="#casa"/> */}
                                <map name="casa">
                                <area className="areas" id="quartoprincipal" shape="rect" coords="5, 5, 305, 155" href="javascript:void(0);" onclick="myFunctionuquartocasal()"></area>
                                <area className="areas" id="quartovisita" shape="rect" coords="5, 160, 154, 360" href="javascript:void(0);" onclick="myFunctionquarto()"></area>
                                <area className="areas" id="sala" shape="rect" coords="156, 160, 305, 360" href="javascript:void(0);" onclick="myFunctionsala()"></area>
                                <area className="areas" id="escada"  shape="rect" coords="318, 159, 362, 310" href="javascript:void(0);" onclick="myFunctionescada()"></area>
                                <area className="areas" id="cozinha"  shape="poly" coords="364, 159, 513, 159,513,360,314,360,314,310,364,310" href="javascript:void(0);" onclick="myFunctioncozinha()"></area>
                                <area className="areas" id="area" shape="poly" coords="310, 5, 513, 5, 513, 50, 410, 50, 410, 155,310, 155" href="javascript:void(0);" onclick="myFunctionarea()"></area>
                                <area className="areas" id="banheiro" shape="rect" coords="415, 50, 513,155" href="javascript:void(0);" onclick="myFunctionbanheiro()"></area>
                                <area className="areas" id="terraco" shape="poly" coords=" 520, 65, 545, 65, 545, 160, 683, 160, 683, 335, 520, 335" href="javascript:void(0);" onclick="myFunctionterraco()"></area>
                                </map>
                        </div>
                    </center>
                </div>
            </div>
                <footer>
                <p>Obrigado por visitar a Página</p>
                </footer>
    </body>

</Layout>
)
export default homePage

