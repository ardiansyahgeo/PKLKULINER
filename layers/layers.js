var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_google_1 = new ol.layer.Tile({
            'title': 'google',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_batas_admin_kelurahan_2 = new ol.format.GeoJSON();
var features_batas_admin_kelurahan_2 = format_batas_admin_kelurahan_2.readFeatures(json_batas_admin_kelurahan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batas_admin_kelurahan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batas_admin_kelurahan_2.addFeatures(features_batas_admin_kelurahan_2);
var lyr_batas_admin_kelurahan_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_batas_admin_kelurahan_2, 
                style: style_batas_admin_kelurahan_2,
                interactive: true,
                title: '<img src="styles/legend/batas_admin_kelurahan_2.png" /> batas_admin_kelurahan'
            });
var format_batas_admin_kecamatan_3 = new ol.format.GeoJSON();
var features_batas_admin_kecamatan_3 = format_batas_admin_kecamatan_3.readFeatures(json_batas_admin_kecamatan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batas_admin_kecamatan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batas_admin_kecamatan_3.addFeatures(features_batas_admin_kecamatan_3);
var lyr_batas_admin_kecamatan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_batas_admin_kecamatan_3, 
                style: style_batas_admin_kecamatan_3,
                interactive: true,
                title: '<img src="styles/legend/batas_admin_kecamatan_3.png" /> batas_admin_kecamatan'
            });
var format_PKLTIDAKTETAPKULINER_4 = new ol.format.GeoJSON();
var features_PKLTIDAKTETAPKULINER_4 = format_PKLTIDAKTETAPKULINER_4.readFeatures(json_PKLTIDAKTETAPKULINER_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PKLTIDAKTETAPKULINER_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PKLTIDAKTETAPKULINER_4.addFeatures(features_PKLTIDAKTETAPKULINER_4);
var lyr_PKLTIDAKTETAPKULINER_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PKLTIDAKTETAPKULINER_4, 
                style: style_PKLTIDAKTETAPKULINER_4,
                interactive: true,
                title: '<img src="styles/legend/PKLTIDAKTETAPKULINER_4.png" /> PKL TIDAK TETAP (KULINER)'
            });
var format_LOKSEM_5 = new ol.format.GeoJSON();
var features_LOKSEM_5 = format_LOKSEM_5.readFeatures(json_LOKSEM_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOKSEM_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOKSEM_5.addFeatures(features_LOKSEM_5);
var lyr_LOKSEM_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LOKSEM_5, 
                style: style_LOKSEM_5,
                interactive: true,
                title: '<img src="styles/legend/LOKSEM_5.png" /> LOKSEM'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_google_1.setVisible(true);lyr_batas_admin_kelurahan_2.setVisible(false);lyr_batas_admin_kecamatan_3.setVisible(true);lyr_PKLTIDAKTETAPKULINER_4.setVisible(true);lyr_LOKSEM_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_google_1,lyr_batas_admin_kelurahan_2,lyr_batas_admin_kecamatan_3,lyr_PKLTIDAKTETAPKULINER_4,lyr_LOKSEM_5];
lyr_batas_admin_kelurahan_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'is_in_prov': 'is_in_prov', 'is_in_town': 'is_in_town', 'is_in_vill': 'is_in_vill', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_batas_admin_kecamatan_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'is_in_muni': 'is_in_muni', 'is_in_prov': 'is_in_prov', 'is_in_town': 'is_in_town', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_PKLTIDAKTETAPKULINER_4.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'NAME1': 'NAME1', 'ID_PKL': 'ID_PKL', 'Name': 'Name', 'Kuliner': 'Kuliner', 'Waktu_Daga': 'Waktu_Daga', 'Foto': 'Foto', 'total': 'total', 'ID': 'ID', 'NAMA_RW': 'NAMA_RW', 'KELURAHAN': 'KELURAHAN', 'KECAMATAN': 'KECAMATAN', });
lyr_LOKSEM_5.set('fieldAliases', {'NAME': 'NAME', 'Keterangan': 'Keterangan', });
lyr_batas_admin_kelurahan_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'is_in_prov': 'TextEdit', 'is_in_town': 'TextEdit', 'is_in_vill': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_batas_admin_kecamatan_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'is_in_muni': 'TextEdit', 'is_in_prov': 'TextEdit', 'is_in_town': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PKLTIDAKTETAPKULINER_4.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'NAME1': 'TextEdit', 'ID_PKL': 'TextEdit', 'Name': 'TextEdit', 'Kuliner': 'TextEdit', 'Waktu_Daga': 'TextEdit', 'Foto': 'ExternalResource', 'total': 'TextEdit', 'ID': 'TextEdit', 'NAMA_RW': 'TextEdit', 'KELURAHAN': 'TextEdit', 'KECAMATAN': 'TextEdit', });
lyr_LOKSEM_5.set('fieldImages', {'NAME': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_batas_admin_kelurahan_2.set('fieldLabels', {'OBJECTID': 'inline label', 'is_in_prov': 'inline label', 'is_in_town': 'inline label', 'is_in_vill': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_batas_admin_kecamatan_3.set('fieldLabels', {'OBJECTID': 'inline label', 'is_in_muni': 'inline label', 'is_in_prov': 'inline label', 'is_in_town': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_PKLTIDAKTETAPKULINER_4.set('fieldLabels', {'OBJECTID_1': 'inline label', 'NAME1': 'inline label', 'ID_PKL': 'inline label', 'Name': 'inline label', 'Kuliner': 'inline label', 'Waktu_Daga': 'inline label', 'Foto': 'inline label', 'total': 'inline label', 'ID': 'inline label', 'NAMA_RW': 'inline label', 'KELURAHAN': 'inline label', 'KECAMATAN': 'inline label', });
lyr_LOKSEM_5.set('fieldLabels', {'NAME': 'inline label', 'Keterangan': 'inline label', });
lyr_LOKSEM_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});