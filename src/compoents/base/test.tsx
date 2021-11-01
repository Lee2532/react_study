import * as React from 'react'
import {ReactHTML, useEffect, useRef, useState} from "react"
import { CreateCat, GetCat } from '../../store/cat/requests'

export const aaa = () => {
    console.log(1)
    const data = GetCat
    console.log(data)
    return data
}
