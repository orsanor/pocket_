import fastify from "fastify";
import {
	serializerCompiler,
	validatorCompiler,
	type ZodTypeProvider,
} from "fastify-type-provider-zod";
import { createGoal } from "../services/create-goal";
import z from "zod";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.post(
	"/goals",
	{
		schema: {
			body: z.object({
				title: z.string(),
				diseredWeeklyFrequency: z.number().int().min(1).max(7),
			}),
		},
	},
	async (request) => {
		const { title, diseredWeeklyFrequency } = request.body;

		await createGoal({
			title,
			diseredWeeklyFrequency,
		});
	},
);

app
	.listen({
		port: 3333,
	})
	.then(() => {
		console.log("HTTP server running!");
	});
