var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_municipios_1 = new ol.format.GeoJSON();
var features_municipios_1 = format_municipios_1.readFeatures(json_municipios_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_municipios_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_municipios_1.addFeatures(features_municipios_1);
var lyr_municipios_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_municipios_1, 
                style: style_municipios_1,
                interactive: true,
    title: 'municipios<br />\
    <img src="styles/legend/municipios_1_0.png" /> 0 - 70<br />\
    <img src="styles/legend/municipios_1_1.png" /> 70 - 262<br />\
    <img src="styles/legend/municipios_1_2.png" /> 262 - 596<br />\
    <img src="styles/legend/municipios_1_3.png" /> 596 - 1153<br />\
    <img src="styles/legend/municipios_1_4.png" /> 1153 - 1766<br />'
        });
var format_lagos_2 = new ol.format.GeoJSON();
var features_lagos_2 = format_lagos_2.readFeatures(json_lagos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lagos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lagos_2.addFeatures(features_lagos_2);
var lyr_lagos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_lagos_2, 
                style: style_lagos_2,
                interactive: true,
                title: '<img src="styles/legend/lagos_2.png" /> lagos'
            });
var format_rios_3 = new ol.format.GeoJSON();
var features_rios_3 = format_rios_3.readFeatures(json_rios_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rios_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rios_3.addFeatures(features_rios_3);
var lyr_rios_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rios_3, 
                style: style_rios_3,
                interactive: true,
                title: '<img src="styles/legend/rios_3.png" /> rios'
            });
var format_rutas_4 = new ol.format.GeoJSON();
var features_rutas_4 = format_rutas_4.readFeatures(json_rutas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rutas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rutas_4.addFeatures(features_rutas_4);
var lyr_rutas_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rutas_4, 
                style: style_rutas_4,
                interactive: true,
                title: '<img src="styles/legend/rutas_4.png" /> rutas'
            });
var format_red_ferroviaria_5 = new ol.format.GeoJSON();
var features_red_ferroviaria_5 = format_red_ferroviaria_5.readFeatures(json_red_ferroviaria_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_red_ferroviaria_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_red_ferroviaria_5.addFeatures(features_red_ferroviaria_5);
var lyr_red_ferroviaria_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_red_ferroviaria_5, 
                style: style_red_ferroviaria_5,
                interactive: true,
                title: '<img src="styles/legend/red_ferroviaria_5.png" /> red_ferroviaria'
            });
var format_Aeropuertos_6 = new ol.format.GeoJSON();
var features_Aeropuertos_6 = format_Aeropuertos_6.readFeatures(json_Aeropuertos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aeropuertos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aeropuertos_6.addFeatures(features_Aeropuertos_6);
var lyr_Aeropuertos_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Aeropuertos_6, 
                style: style_Aeropuertos_6,
                interactive: true,
                title: '<img src="styles/legend/Aeropuertos_6.png" /> Aeropuertos'
            });
var format_capital_7 = new ol.format.GeoJSON();
var features_capital_7 = format_capital_7.readFeatures(json_capital_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_capital_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_capital_7.addFeatures(features_capital_7);
var lyr_capital_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_capital_7, 
                style: style_capital_7,
                interactive: true,
                title: '<img src="styles/legend/capital_7.png" /> capital'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_municipios_1.setVisible(true);lyr_lagos_2.setVisible(true);lyr_rios_3.setVisible(true);lyr_rutas_4.setVisible(true);lyr_red_ferroviaria_5.setVisible(true);lyr_Aeropuertos_6.setVisible(true);lyr_capital_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_municipios_1,lyr_lagos_2,lyr_rios_3,lyr_rutas_4,lyr_red_ferroviaria_5,lyr_Aeropuertos_6,lyr_capital_7];
lyr_municipios_1.set('fieldAliases', {'gid': 'gid', 'nom_mun': 'nom_mun', 'p_total': 'p_total', 'pobfem': 'pobfem', 'tothog': 'tothog', 'pobman': 'pobman', 'area2': 'area2', '5': '5', });
lyr_lagos_2.set('fieldAliases', {'gid': 'gid', 'objectid': 'objectid', 'id_cueagua': 'id_cueagua', 'tipo': 'tipo', 'area': 'area', 'perimetro': 'perimetro', });
lyr_rios_3.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'CUENCA': 'CUENCA', });
lyr_rutas_4.set('fieldAliases', {'gid': 'gid', 'id_segment': 'id_segment', 'cve_ent': 'cve_ent', 'edo': 'edo', 'nom_tramo': 'nom_tramo', 'admin': 'admin', 'pav': 'pav', 'dertrans': 'dertrans', 'long_kms': 'long_kms', 'ruta': 'ruta', 'claspyd': 'claspyd', 'desc_clas': 'desc_clas', 'obs_clas': 'obs_clas', });
lyr_red_ferroviaria_5.set('fieldAliases', {'gid': 'gid', 'nom_tram': 'nom_tram', 'tipo_via': 'tipo_via', 'lon_km': 'lon_km', 'id': 'id', });
lyr_Aeropuertos_6.set('fieldAliases', {'ID': 'ID', 'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', });
lyr_capital_7.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_municipios_1.set('fieldImages', {'gid': 'TextEdit', 'nom_mun': 'TextEdit', 'p_total': 'TextEdit', 'pobfem': 'TextEdit', 'tothog': 'TextEdit', 'pobman': 'TextEdit', 'area2': 'TextEdit', '5': 'TextEdit', });
lyr_lagos_2.set('fieldImages', {'gid': 'Range', 'objectid': 'Range', 'id_cueagua': 'TextEdit', 'tipo': 'TextEdit', 'area': 'TextEdit', 'perimetro': 'TextEdit', });
lyr_rios_3.set('fieldImages', {'NOMBRE': 'TextEdit', 'CUENCA': 'TextEdit', });
lyr_rutas_4.set('fieldImages', {'gid': 'TextEdit', 'id_segment': 'TextEdit', 'cve_ent': 'TextEdit', 'edo': 'TextEdit', 'nom_tramo': 'TextEdit', 'admin': 'TextEdit', 'pav': 'TextEdit', 'dertrans': 'TextEdit', 'long_kms': 'TextEdit', 'ruta': 'TextEdit', 'claspyd': 'TextEdit', 'desc_clas': 'TextEdit', 'obs_clas': 'TextEdit', });
lyr_red_ferroviaria_5.set('fieldImages', {'gid': 'TextEdit', 'nom_tram': 'TextEdit', 'tipo_via': 'TextEdit', 'lon_km': 'TextEdit', 'id': 'TextEdit', });
lyr_Aeropuertos_6.set('fieldImages', {'ID': 'TextEdit', 'NOMBRE': 'TextEdit', 'TIPO': 'Range', });
lyr_capital_7.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_municipios_1.set('fieldLabels', {'gid': 'no label', 'nom_mun': 'header label', 'p_total': 'header label', 'pobfem': 'no label', 'tothog': 'no label', 'pobman': 'no label', 'area2': 'header label', '5': 'no label', });
lyr_lagos_2.set('fieldLabels', {'gid': 'no label', 'objectid': 'header label', 'id_cueagua': 'no label', 'tipo': 'no label', 'area': 'no label', 'perimetro': 'no label', });
lyr_rios_3.set('fieldLabels', {'NOMBRE': 'header label', 'CUENCA': 'no label', });
lyr_rutas_4.set('fieldLabels', {'gid': 'no label', 'id_segment': 'no label', 'cve_ent': 'no label', 'edo': 'no label', 'nom_tramo': 'header label', 'admin': 'no label', 'pav': 'no label', 'dertrans': 'no label', 'long_kms': 'no label', 'ruta': 'no label', 'claspyd': 'no label', 'desc_clas': 'no label', 'obs_clas': 'no label', });
lyr_red_ferroviaria_5.set('fieldLabels', {'gid': 'no label', 'nom_tram': 'header label', 'tipo_via': 'no label', 'lon_km': 'no label', 'id': 'no label', });
lyr_Aeropuertos_6.set('fieldLabels', {'ID': 'no label', 'NOMBRE': 'header label', 'TIPO': 'header label', });
lyr_capital_7.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_capital_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});