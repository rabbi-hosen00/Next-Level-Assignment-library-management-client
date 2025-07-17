import AddBook from "@/book/addBook";
import AllBooks from "@/book/allBooks";
import editBook from "@/book/editBook";
import home from "@/home/home";
import Layout from "@/main_layout/Layout";
import {
    createBrowserRouter,

} from "react-router";


const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                path: "/",
                Component: home
            },
            {
                path: "/books",
                Component: AllBooks
            },
            {
                path: "/create-book",
                Component: AddBook
            },
            {
                path: "/edit-book/:id",
                Component: editBook
            }
        ]
    }
])

export default router;