$(document).ready(function () {
//data should hold the jquery api calls to pipulated the clumns below
    var data = [ 
    ]
     
    jexcel(document.getElementById('spreadsheet'), {
        data:data,
        columns: [
            { type: 'text', title:'SKU', width:120 },
            { type: 'text', title:'QTY', width:120 },
            { type: 'text', title:'UPC', width:120 },
            { type: 'text', title:'Size', width:120 },
            { type: 'text', title:'Color', width:120 },
            { type: 'text', title:'Cost', width:120 },
            { type: 'text', title:'Brand', width:120 },
            { type: 'text', title:'Description', width:120 },
            { type: 'text', title:'Image_1', width:120 },
            { type: 'text', title:'Image_2', width:120 },
            { type: 'text', title:'Image_3', width:120 },
            { type: 'text', title:'Image_4', width:120 },
            { type: 'text', title:'Image_5', width:120 },
            { type: 'text', title:'Image_6', width:120 },
            { type: 'text', title:'Weight', width:120 },
            { type: 'text', title:'Category', width:120 },
            { type: 'text', title:'Name', width:120 },
            { type: 'text', title:'Meta_Keywords', width:120 },
            { type: 'text', title:'Material', width:120 },
            { type: 'text', title:'Tags', width:120 },
            { type: 'text', title:'Unique Parents', width:120 },
            { type: 'text', title:'Price', width:120 },
            { type: 'text', title:'Compare At', width:120 },
            { type: 'text', title:'CREATE', width:120 },
            { type: 'text', title:'Already Exists?', width:120 },
            { type: 'checkbox', title:'Select to Push Ind.', width:120 },
            
         ]
    });
     
    document.getElementById('download').onclick = function () {
        mySpreadsheet.download();
    }
    
});