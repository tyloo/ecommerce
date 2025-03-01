CREATE TYPE "public"."condition" AS ENUM('new', 'excellent', 'very_good', 'good');--> statement-breakpoint
CREATE TYPE "public"."gender" AS ENUM('male', 'female');--> statement-breakpoint
CREATE TYPE "public"."type" AS ENUM('category', 'default', 'type', 'size');--> statement-breakpoint
CREATE TABLE "collection" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" varchar NOT NULL,
	"name" varchar NOT NULL,
	"description" text,
	"gender" "gender" DEFAULT 'male' NOT NULL,
	"type" "type" DEFAULT 'default' NOT NULL,
	"image" varchar NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "collection_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "product" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" varchar NOT NULL,
	"name" varchar NOT NULL,
	"description" text,
	"price" integer NOT NULL,
	"original_price" integer NOT NULL,
	"condition" "condition" DEFAULT 'new' NOT NULL,
	"size" text NOT NULL,
	"color" text NOT NULL,
	"images" jsonb NOT NULL,
	"collections" jsonb NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "product_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE INDEX "Collection_slug_idx" ON "collection" USING btree ("slug");--> statement-breakpoint
CREATE INDEX "Collection_gender_idx" ON "collection" USING btree ("gender");--> statement-breakpoint
CREATE INDEX "Collection_type_idx" ON "collection" USING btree ("type");--> statement-breakpoint
CREATE INDEX "Product_slug_idx" ON "product" USING btree ("slug");--> statement-breakpoint
CREATE INDEX "Product_condition_idx" ON "product" USING btree ("condition");--> statement-breakpoint
CREATE INDEX "Product_size_idx" ON "product" USING btree ("size");--> statement-breakpoint
CREATE INDEX "Product_color_idx" ON "product" USING btree ("color");