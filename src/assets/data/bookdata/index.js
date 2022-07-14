import book1 from "./../../image/book1.jpg";

import book2 from "./../../image/book2.jpg";
import book3 from "./../../image/book3.jpg";
import book4 from "./../../image/book4.jpg";
import book5 from "./../../image/book5.jpg";
import bookdata1 from "./../../exact.pdf";
import { DownOutlined, UserOutlined } from '@ant-design/icons';


export let Authors = [
    {
        label: "All",
        key : '1'
    },
    {
        label: "Aster Gudina",
        key: '1',
        icon: <UserOutlined />,
    },
    {
        label: "Lensa Gudina",
        key: '2',
        icon: <UserOutlined />,
    },
    {
        label: "Gudina Tumsa",
        key: '3',
        icon: <UserOutlined />,
    },
]


export let data = [
    {
        author: "Gudina Tumsa",
        image: book1,
        uploadDate: "2020-01-04",
        book: bookdata1,
        bookName: "Lord Of Fortune",
        popular : 2.8
    },
    {
        author: "Gudina Tumsa",
        image: book2,
        uploadDate: "2020-03-01",
        book: bookdata1,
        bookName: "Boy Of The Day",
        popular : 1.5
    },
    {
        author: "Lensa Gudina",
        image: book3,
        uploadDate: "2020-06-01",
        book: bookdata1,
        bookName: "Mice Of The Nation",
         popular : 4.5
    },
    {
        author: "Lensa Gudina",
        image: book4,
        uploadDate : "2020-04-01",
        book: bookdata1,
        bookName: "Women Without Hate",
         popular : 3.8
    },
    {
        author: "Lensa Gudina",
        image: book5,
        uploadDate: "2020-09-01",
        book: bookdata1,
        bookName: "Dogs And Witches",
         popular : 3.1
    },
    {
        author: "Aster Gudina",
        image: book1,
        uploadDate: "2020-08-01",
        book: bookdata1,
        bookName: "Disruption Of The Ancients",
         popular : 3.2
    },
    {
        author: "Aster Gudina",
        image: book3,
        uploadDate: "2020-06-01",
        book: bookdata1,
        bookName: "Future Of The World",
         popular : 3.3
    },
    {
        author: "Aster Gudina",
        image: book4,
        uploadDate: "2010-01-06",
        book: bookdata1,
        bookName: "Commanding The Angels",
         popular : 2.5
    },
  
]