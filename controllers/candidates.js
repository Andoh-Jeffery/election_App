import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient

// Prisma create function

const createCandidate = async (req, res, next) => {
    const data = req.body
    try {
        const candidate = await prisma.candidate.create({
            data: data
        })
        res.status(201).json({ message: 'candidate saved', candidate })
    } catch (error) {
        console.log(error);
    }
}

const getCandidateByPosition = async (req, res, next) => {
    const positionId = req.params.id
    try {
        const candidate = await prisma.candidate.findMany({
            where: {
                positionId
            }
        })
        res.status(200).json({ candidate })
    } catch (error) {

    }
}

const getSingleCandidate = async (req, res, next) => {
    const id = req.params.id
    try {
        const candidate = await prisma.candidate.findUnique({
            where: {
                id
            }

        })
        res.status(200).json({ candidate })
    } catch (error) {
        console.log(error);
    }
}

const updateCandidate = async (req, res, next) => {
    const id = req.params.id
    const data = req.body
    try {
        const candidate = await prisma.candidate.update({
            where: {
                id
            },
            data: data
        })
        res.status(201).json({ message: 'candidate updated', candidate })
    } catch (error) {
        console.log(error);
    }
}

const deleteCandidate = async (req, res, next) => {
    const id = req.params.id
    try {
        const candidate = await prisma.candidate.delete({
            where: {
                id
            }
        })
        res.status(201).json({ message: 'candidate deleted' })
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    createCandidate,
    updateCandidate,
    deleteCandidate,
    getSingleCandidate,
    getCandidateByPosition
}