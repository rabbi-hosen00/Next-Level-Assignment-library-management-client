import AddBook from "@/book/addBook";
import AllBooks from "@/book/allBooks";
import editBook from "@/book/editBook";
import Borrow from "@/borrow/borrow";
import BorrowSummary from "@/borrow/borrowSummary";
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
            },
            {
                path: "/borrow/:book",
                Component: Borrow
            },
            {
                path: "/borrow-summary",
                Component: BorrowSummary
            }
        ]
    }
])

export default router;