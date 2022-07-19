export const backendurl = 'http://localhost:8000/'; 
// export const backendurl = 'http://metalstation.herokuapp.com/'; 
export const AdminLogin = backendurl+'auth/admin/login'; 
export const UserLogin = backendurl+'auth/user/login'; 
export const UserRegister = backendurl+'auth/user/register'; 
export const AllSubscribers = backendurl+'subscribers/getall'; 
export const AllUsers = backendurl+'auth/user/getall'; 
export const AllBlgos = backendurl+'blogs/getall'; 
export const DeleteBlogUrl = backendurl+'blogs/delete'; 
export const UndoDeleteBlogUrl = backendurl+'blogs/undo'; 
export const EditBlogUrl = backendurl+'blogs/edit';
export const AddBlogUrl = backendurl+'blogs/add';
export const SendEmailUrl = backendurl+'emails/send';
export const GetAllProducts = backendurl+'products/find/all';
export const ProductDeleteUrl = backendurl+'products/delete';
export const AddProductUrl = backendurl+'products/add';
export const EditProductUrl = backendurl+'products/edit';
export const UndoDeleteProductUrl = backendurl+'products/undo';
export const AllOrdersUrl = backendurl+'orders/getall';
export const AcceptOrderUrl = backendurl+'orders/update';
export const AllSellUrl = backendurl+'sell/getsell';
export const AllScrapUrl = backendurl+'sell/getscrap';
export const BlogCategories = backendurl+'blogs/categories';
export const ProductCategories = backendurl+'products/categories';
export const SingleBlogUrl = backendurl+'blogs';
export const GetWishList = backendurl+'wishlist';
export const EmailVerificationUrl = backendurl+'auth/user/verify';
export const ResetRequestUrl = backendurl+'auth/user/reset';
export const WishlistPushUrl = backendurl+'wishlist/add';