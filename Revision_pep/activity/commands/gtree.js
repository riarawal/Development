let root = {
    data: 10,
    children: [{
        data: 20,
        children: [{
            data: 50,
            children: []
        }, {
            data: 60,
            children: []
        }
        ]
    },{
        data:30,
        children:[{
            data:70,
            children:[]
        }]
    },{
        data:40,
        children:[{
            data:80,
            children:[]
        },{
            data:90,
            children:[]
        }]
    }]
}

function disp(node){
    
    let fam=node.data+"=>";
    for(let i=0;i<node.children.length;i++){
        let child=node.children[i];
        fam=fam+child.data+", ";
        // disp(child);
    }
    console.log(fam)
    for(let i=0;i<node.children.length;i++){
        child=node.children[i];
        disp(child);
    }
}
disp(root);