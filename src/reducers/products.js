var initialState=[
    {
        id:1,
        name:'Iphone 7 Plus',
        image:'http://cdn.pose.com.vn/legacy/images/baiviet/201411/He-lo-hinh-anh-mau-iPhone-8-dep-doc-dinh-nhin-la-phe-_60.jpg',
        description:'Sản Phẩm Do Apple Sản Xuất',
        price: 200,
        inventory:10,
        rating:5
    },
    {
        id:2,
        name:'Iphone 8 Plus',
        image:'http://cdn.pose.com.vn/legacy/images/baiviet/201411/He-lo-hinh-anh-mau-iPhone-8-dep-doc-dinh-nhin-la-phe-_60.jpg',
        description:'Sản Phẩm Do Apple Sản Xuất',
        price: 300,
        inventory:10,
        rating:4
    },
    {
        id:3,
        name:'Iphone 9 Plus',
        image:'http://cdn.pose.com.vn/legacy/images/baiviet/201411/He-lo-hinh-anh-mau-iPhone-8-dep-doc-dinh-nhin-la-phe-_60.jpg',
        description:'Sản Phẩm Do Apple Sản Xuất',
        price: 400,
        inventory:10,
        rating:4
    }
];
const products = (state = initialState,action)=>{
    switch(action.type){
        default : return [...state]
    }
}
export default products;