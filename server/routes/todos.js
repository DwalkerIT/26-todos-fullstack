import express from 'express'
const router = express.Router()
import conn from '../db.js'

router.get('/todos', async (req, res) => {
    const todos = await conn.raw(`
        SELECT
        *
        FROM todos
        WHERE user_id = ?;
    `, [1])
    const rows = todos.rows
    res.json(rows)
})
//req.params
router.delete('/todos/:id', async (req, res) => {
    const todoId = req.params.Id
    const todos = await conn.raw(`
        DELETE FROM todos
        WHERE user_id = ?;
    `, [todoId])
    // const rows = todos.rows
    res.json({message: 'todo deleted'})
})

router.post('/todos/:authorId/:description', async (req, res) => {
    // the description
    const { description } = req.body
    await conn.raw(`
    INSERT INTO todos (description, status, user_id)
    VALUES (?,?,?)
    `, ['testing', 'active', 1])
    res.json({message: 'todo created'})
})

router.patch('/todos/:authorId/:description', async (req, res) => {
    // the description
    const { description } = req.body
    await conn.raw(`
    INSERT INTO todos (description, status, user_id)
    VALUES (?,?,?)
    `, ['testing', 'active', 1])
    res.json({message: 'todo created'})
})
export default router