 google.charts.load('current', {
        callback: drawMap,
        packages:['geochart','table','corechart']
    });
   
var chartwidth1 = $('#leftContent1').width();
var chartwidth2 = $('#leftContent5').width();
    //var data = null;
    var chartData = null;

    // The 'drawMap' callback function to setup all visualizations on load initalization and reprocess on other calls...
    function drawMap() {
        // Query, service, and url
        var container = document.getElementById('leftContent1');
        container.innerHTML = '<img src="https://data-gov.tw.rpi.edu/images/ajax-loader.gif" /><br /><br />Please wait... The query may take some time to complete.';
        clear_td();
        var container = document.getElementById('leftContent2');
        container.innerHTML = '<img src="https://data-gov.tw.rpi.edu/images/ajax-loader.gif" /><br /><br />Please wait... The query may take some time to complete.';
        clear_td();
        var container = document.getElementById('leftContent3');
        container.innerHTML = '<img src="https://data-gov.tw.rpi.edu/images/ajax-loader.gif" /><br /><br />Please wait... The query may take some time to complete.';
        clear_td();
        var container = document.getElementById('leftContent4');
        container.innerHTML = '<img src="https://data-gov.tw.rpi.edu/images/ajax-loader.gif" /><br /><br />Please wait... The query may take some time to complete.';
        clear_td();
        var container = document.getElementById('leftContent5');
        container.innerHTML = '<img src="https://data-gov.tw.rpi.edu/images/ajax-loader.gif" /><br /><br />Please wait... The query may take some time to complete.';
        clear_td();
        var container = document.getElementById('leftContent6');
        container.innerHTML = '<img src="https://data-gov.tw.rpi.edu/images/ajax-loader.gif" /><br /><br />Please wait... The query may take some time to complete.';
        clear_td();
        

        //------------------------------------------------------------
        // Query Strings
        //------------------------------------------------------------

        

        var querytxt1 = "prefix raw: <https://github.com/timrdf/csv2rdf4lod-automation/wiki/CSV2RDF4LOD_BASE_URI#/source/Users/dataset/melvinjames/vocab/raw/>select * where {{select ?c (count(?c) as ?2013cases)where{?s raw:year '2013',?t;raw:crimename ?c} group by ?c}.{select ?c (count(?c) as ?2014cases)where{?s raw:year '2014',?t;raw:crimename ?c} group by ?c}.{select ?c (count(?c) as ?2015cases)where{?s raw:year '2015',?t;raw:crimename ?c} group by ?c}}";
        
        var querytxt2 = "prefix raw: <https://github.com/timrdf/csv2rdf4lod-automation/wiki/CSV2RDF4LOD_BASE_URI#/source/Users/dataset/melvinjames/vocab/raw/> select * where {{select ?CrimeDesc (count(?CrimeDesc) as ?TotalCases) where { ?s raw:crimename ?CrimeDesc } group by ?CrimeDesc order by desc (?TotalArrest) }. {select ?CrimeDesc (count(?CrimeDesc) as ?TotalArrest) where { ?s raw:crimename ?CrimeDesc  . ?s raw:arrest  '1'} group by ?CrimeDesc order by desc (?TotalArrest) }}";

var querytxt3 = "prefix raw: <https://github.com/timrdf/csv2rdf4lod-automation/wiki/CSV2RDF4LOD_BASE_URI#/source/Users/dataset/melvinjames/vocab/raw/> select ?crimeDesc (count(?crimeDesc) as ?frequency) where { ?s raw:crimename ?crimeDesc .} group by ?crimeDesc order by desc (?crimeDesc)";
        
        var querytxt4 =  "prefix raw: <https://github.com/timrdf/csv2rdf4lod-automation/wiki/CSV2RDF4LOD_BASE_URI#/source/Users/dataset/melvinjames/vocab/raw/> select * where {{SELECT ?CrimeDesc  (count(?CrimeDesc) as ?SideWalk) WHERE { ?s  raw:location 'SIDEWALK' .  ?s raw:crimename ?CrimeDesc } group by  ?PremiseDesc ?CrimeDesc order by ?PremiseDesc ?CrimeDesc ?count }.{ SELECT ?CrimeDesc  (count(?CrimeDesc) as ?Street) WHERE { ?s  raw:location 'STREET' .  ?s raw:crimename ?CrimeDesc } group by  ?PremiseDesc ?CrimeDesc order by ?PremiseDesc ?CrimeDesc ?count }.{SELECT ?CrimeDesc  (count(?CrimeDesc) as ?ParkingLot) WHERE { ?s  raw:location 'PARKING LOT' .  ?s raw:crimename ?CrimeDesc } group by  ?PremiseDesc ?CrimeDesc order by ?PremiseDesc ?CrimeDesc ?count}.{SELECT ?CrimeDesc  (count(?CrimeDesc) as ?Alley) WHERE { ?s  raw:location 'ALLEY' .  ?s raw:crimename ?CrimeDesc } group by  ?PremiseDesc ?CrimeDesc order by ?PremiseDesc ?CrimeDesc ?count}.{SELECT ?CrimeDesc  (count(?CrimeDesc) as ?BarAndNightclub) WHERE { ?s  raw:location 'BAR/COCKTAIL/NIGHTCLUB' .  ?s raw:crimename ?CrimeDesc } group by  ?PremiseDesc ?CrimeDesc order by ?PremiseDesc ?CrimeDesc ?count}}";
        
        var querytxt5 = "prefix raw: <https://github.com/timrdf/csv2rdf4lod-automation/wiki/CSV2RDF4LOD_BASE_URI#/source/Users/dataset/melvinjames/vocab/raw/>PREFIX xsd:<http://www.w3.org/2001/XMLSchema#>select * where{{select ?c (count(?c) as ?8pmto12am)where {?a raw:time ?t;raw:crimename ?c FILTER(xsd:integer(?t) >= 2000 && xsd:integer(?t) <= 2359 )}group by ?c}.{select ?c (count(?c) as ?12amto3am)where {?a raw:time ?t;raw:crimename ?c FILTER(xsd:integer(?t) >= 0 && xsd:integer(?t) < 300 )}group by ?c}.{select ?c (count(?c) as ?3amto6am)where {?a raw:time ?t;raw:crimename ?c FILTER(xsd:integer(?t) >= 300 && xsd:integer(?t) < 600 )}group by ?c}.{select ?c (count(?c) as ?6amto12pm)where {?a raw:time ?t;raw:crimename ?c FILTER(xsd:integer(?t) >= 600 && xsd:integer(?t) < 1200  )}group by ?c}.{select ?c (count(?c) as ?12pmto4pm)where {?a raw:time ?t;raw:crimename ?c FILTER(xsd:integer(?t) >= 1200 && xsd:integer(?t) < 1600  )}group by ?c}.{select ?c (count(?c) as ?4pmto8pm)where {?a raw:time ?t;raw:crimename ?c FILTER(xsd:integer(?t) >= 1600 && xsd:integer(?t) < 2000  )}group by ?c}}"; 
                
        var querytxt6 = "prefix raw: <https://github.com/timrdf/csv2rdf4lod-automation/wiki/CSV2RDF4LOD_BASE_URI#/source/Users/dataset/melvinjames/vocab/raw/> select * where{{select ?crimeDesc (count(?crimeDesc) as ?Chicago) where { graph<http://localhost:3030/crime/data/chicago>{?s raw:crimename ?crimeDesc}}group by ?crimeDesc order by desc( ?Chicago)}.{select ?crimeDesc (count(?crimeDesc) as ?LA) where { graph<http://localhost:3030/crime/data/lacity>{?s raw:crimename ?crimeDesc}}group by ?crimeDesc order by desc( ?LA)}}order by ?crimeDesc"; 
        
        //Send each query to the xmlquery function to convert to JSON and process
        xmlquery(querytxt1, 1);
        xmlquery(querytxt2, 2);
        xmlquery(querytxt3, 3);
        xmlquery(querytxt4, 4);
        xmlquery(querytxt5, 5);
        xmlquery(querytxt6, 6);

     function xmlquery(querytxt, id){
        var queryurl;
	if(id == 1)
	    queryurl = "http://localhost:3030/ChicagoFinal/query?output=xml&" +
                        "query=" + encodeURIComponent(querytxt);
	if(id == 2)
     	    queryurl = "http://localhost:3030/ChicagoFinal/query?output=xml&" +
                        "query=" + encodeURIComponent(querytxt);
	if(id == 3)
	    queryurl = "http://localhost:3030/LAFinal/query?output=xml&" +
                        "query=" + encodeURIComponent(querytxt);
        if(id == 4)
	    queryurl = "http://localhost:3030/LAFinal/query?output=xml&" +
                        "query=" + encodeURIComponent(querytxt);
	if(id == 5)
	    queryurl = "http://localhost:3030/LAFinal/query?output=xml&" +
                        "query=" + encodeURIComponent(querytxt);
	if(id == 6)
	    queryurl = "http://localhost:3030/LAChicagoFinal/query?output=xml&" +
                        "query=" + encodeURIComponent(querytxt);
        var xmlquery = new XMLHttpRequest(); // ...AJAX object instantiation

        xmlquery.open('GET', queryurl);

        // probably need these headers
        xmlquery.setRequestHeader ('Content-type', 'application/x-www-form-urlencoded');
        xmlquery.setRequestHeader ("Accept", "application/sparql-results+xml");
        xmlquery.setRequestHeader("Access-Control-Allow-Origin",'*');


        // Set up callback to get the response asynchronously...
        xmlquery.onreadystatechange = function () {
            if (xmlquery.readyState == 4) {
                if (xmlquery.status == 200) {
                    // Results are in a string in 'xmlhttp.responseText', but we can't return it from this sub-function,
                    //   so work on it here...
                    strRespQ1 = new XMLSerializer().serializeToString( convertXML2GVDS( xmlquery.responseXML ) );
                    strJSON = strRespQ1.replace(/(^google\.visualization\.Query\.setResponse\(|\)$)/g,'');
                    objKeysRegex = /({|,)(?:\s*)(?:')?([A-Za-z_$\.][A-Za-z0-9_ \-\.$]*)(?:')?(?:\s*):/g; // ...look for object names
                    strJSONnew = strJSON.replace( objKeysRegex, "$1\"$2\":" ); // ...all object names should be double quoted
                    strJSON = strJSONnew.replace(/\'/g, "\""); // ...replace single quote with double quote
                    strJSONnew = strJSON.replace(/(:|\{)0+([1-9][0-9]*|0)/g, "\$1\$2"); // ...remove leading 0s from integer values
                    strJSONnew = strJSONnew.replace(/\\n/g, "\\n")  
                                            .replace(/\\'/g, "\\'")
                                            .replace(/\\"/g, '\\"')
                                            .replace(/\\&/g, "\\&")
                                            .replace(/\\r/g, "\\r")
                                            .replace(/\\t/g, "\\t")
                                            .replace(/\\b/g, "\\b")
                                            .replace(/\\f/g, "\\f")
                                            .replace(/[\u0000-\u0019]+/g,"");
                    objJSON = JSON.parse( strJSONnew ) ;
                    data = new google.visualization.DataTable( objJSON.table );
                    if(id == 1){
                    handleQuery1Response( data );
                    }
                    if(id == 2){
                    handleQuery2Response( data );
                    }
                    if(id == 3){
                    handleQuery3Response( data );
                    }
                    if(id == 4){
                    handleQuery4Response( data );
                    }
                    if(id == 5){
                    handleQuery5Response( data );
                        //alert( data.toJSON() );
                    }
                    if(id == 6){
                    handleQuery6Response( data );
                        //alert( data.toJSON() );
                    }
                }
                else {
                    // Some kind of error occurred...
                    alert("Sparql query error: " + xmlquery.status + " " + xmlquery.responseText);
                }
            }
        }

        // Send the query to the endpoint.
        xmlquery.send();
     }
        };
    
      
      function clear_td() {
        var tds = document.getElementsByTagName('div.leftContent');
        var num = tds.length;
        for(var i = 0; i < num; i++) {
            tds[i].setAttribute('style','');
        }
    };

function handleQuery1Response(data) {
        // Make sure our data isn't empty.
        if (null == data)
            return;
        var rows = data.getNumberOfRows();
        if (rows == 0)
            return;

        var container = document.getElementById('leftContent1');

        var options = {
            title: 'Comparison of crimes over the years in Chicago',
            width: chartwidth1,
            height: '400',
            vAxis: {title: 'Frequency'},
            hAxis: {title: 'Crime'},
            seriesType: 'bars',
            series: {5: {type: 'line'}}
            };

        var chart = new google.visualization. ComboChart(container);
        chart.draw(data, options);

        

    }
      
      
    function handleQuery2Response(data) {
        // Make sure our data isn't empty.
        if (null == data)
            return;
        var rows = data.getNumberOfRows();
        if (rows == 0)
            return;

        var container = document.getElementById('leftContent2');

        var options = {
            title: 'Total Cases vs Total Arrests in Chicago',
            width: chartwidth1,
            height: '400',
            vAxis: {title: 'Frequency'},
            hAxis: {title: 'Crime'},
            seriesType: 'bars',
            series: {5: {type: 'line'}}
            };

        var chart = new google.visualization. ComboChart(container);
        chart.draw(data, options);

        

    }
      
      //QUERY RESPONSE 3 HANDLER
      function handleQuery3Response(data) {
                // Make sure our data isn't empty.
        if (null == data)
            return;
        var rows = data.getNumberOfRows();
        if (rows == 0)
            return;

        var container = document.getElementById('leftContent3');

        var options = {
          title: 'Crimes in LA',
          width: chartwidth1,
height: '400',
          is3D: true,
        };

        var chart = new google.visualization. PieChart(container);
        chart.draw(data, options);
    }
      
    //QUERY RESPONSE 4 HANDLER
      
    function handleQuery4Response(data) {
                // Make sure our data isn't empty.
        if (null == data)
            return;
        var rows = data.getNumberOfRows();
        if (rows == 0)
            return;

        var container = document.getElementById('leftContent4');

        var options = {
            title: 'Crimes in most common areas in LA',
            width: chartwidth1,
            height: '400',
            vAxis: {title: 'Frequency'},
            hAxis: {title: 'Crime'},
            seriesType: 'bars',
            series: {5: {type: 'line'}}
            };

        var chart = new google.visualization. ComboChart(container);
        chart.draw(data, options);  

    }
      
      //QUERY RESPONSE 5 HANDLER
      
    function handleQuery5Response(data) {
       // Make sure our data isn't empty.
        if (null == data)
            return;
        var rows = data.getNumberOfRows();
        if (rows == 0)
            return;

        var container = document.getElementById('leftContent5');

        var options = {
            title: 'Crimes during certain time intervals in LA',
            width: chartwidth1,
            height: '400',
            vAxis: {title: 'Frequency'},
            hAxis: {title: 'Crime'},
            seriesType: 'bars',
            series: {5: {type: 'line'}}
            };

        var chart = new google.visualization. ComboChart(container);
        chart.draw(data, options);
    }
      
       //QUERY RESPONSE 6 HANDLER
      
    function handleQuery6Response(data) {
                        // Make sure our data isn't empty.
        if (null == data)
            return;
        var rows = data.getNumberOfRows();
        if (rows == 0)
            return;

        var container = document.getElementById('leftContent6');

        var options = {
            title: 'Comparison of crimes in LA and Chicago',
            width: chartwidth1,
            height: '400',
            vAxis: {title: 'Frequency'},
            hAxis: {title: 'Crime'},
            seriesType: 'bars',
            series: {5: {type: 'line'}}
            };

        var chart = new google.visualization. ComboChart(container);
        chart.draw(data, options);
    }
      


// ================================================================================
// == Convert XML to Google Visualization                                        ==
// ================================================================================

    function convertXML2GVDS(xml) {
        // NOTE: See the XSLT Stylesheet Transform below this function
        //       It is used to transform the SPARQL XML results into Google Visualization JSON
        domParser = new DOMParser();
        xsl = domParser.parseFromString(sparql2json.innerHTML, "text/xml");

        // Code for IE...
        if (window.ActiveXObject)
        {
            resultDocument = xml.transformNode(xsl);
        }
        // Code for Chrome, Firefox, Opera, etc...
        else
        {
            xsltProcessor = new XSLTProcessor();
            xsltProcessor.importStylesheet(xsl);
            resultDocument = xsltProcessor.transformToFragment(xml, document);
        }
        return resultDocument;
    }



  