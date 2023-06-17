import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient

// Prisma create function
const createPosition = async (req, res, next) => {
    const data = req.body
    try {
        const position = await prisma.positions.create({
            data: data
        })
        res.status(201).json({ message: 'position saved', position })
    } catch (error) {
        console.log(error);
    }
}

const getPositionById = async (req, res, next) => {
    const id = req.params.id
    try {
        const position = await prisma.positions.findUnique({
            where: {
                id
            }
        })
        res.status(200).json({ position })
    } catch (error) {

    }
}

const getAllPositions = async (req, res, next) => {
    try {
        const position = await prisma.positions.findMany()
        res.status(200).json({ position })
    } catch (error) {
        console.log(error);
    }
}

const updatePosition = async (req, res, next) => {
    const id = req.params.id
    const data = req.body
    try {
        const position = await prisma.positions.update({
            where: {
                id
            },
            data: data
        })
        res.status(201).json({ message: 'position updated', position })
    } catch (error) {
        console.log(error);
    }
}

const deletePosition = async (req, res, next) => {
    const id = req.params.id
    try {
        const position = await prisma.positions.delete({
            where: {
                id
            }
        })
        res.status(201).json({ message: 'position deleted' })
    } catch (error) {
        console.log(error);
    }
}



module.exports = {
    createPosition,
    getPositionById,
    getAllPositions,
    updatePosition,
    deletePosition
}